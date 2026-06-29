import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const contentDir = path.join(projectRoot, "content");
const configDir = path.join(projectRoot, "config");
const sectionsConfigDir = path.join(configDir, "sections");
const manifestPath = path.join(projectRoot, "manifest.json");

async function main() {
    await ensureDirectory(sectionsConfigDir);

    const sectionFolders = await getSectionFolders();
    const activeSectionIds = new Set(sectionFolders.map((folder) => folder.id));

    await createMissingSectionConfigs(sectionFolders);
    await deleteOrphanedSectionConfigs(activeSectionIds);

    const sections = [];
    const documents = [];

    for (const folder of sectionFolders) {
        const sectionConfig = await readSectionConfig(folder.id);
        const markdownFiles = await findMarkdownFiles(folder.path);

        if (!markdownFiles.length) {
            continue;
        }

        const sectionDocuments = [];

        for (const filePath of markdownFiles) {
            const markdown = await fs.readFile(filePath, "utf8");
            const { meta, body } = splitFrontMatter(markdown);
            const document = createDocument({
                body,
                filePath,
                meta,
                sectionConfig
            });

            sectionDocuments.push(document);
            documents.push(document);
        }

        const sortedSectionDocuments = sectionDocuments.sort(compareOrderThenLabel);

        sections.push({
            id: sectionConfig.id,
            label: sectionConfig.label,
            kicker: sectionConfig.kicker,
            order: sectionConfig.order,
            description: sectionConfig.description,
            documents: sortedSectionDocuments.map((document) => document.id)
        });
    }

    if (!documents.length) {
        throw new Error("No Markdown files found inside content/<section>/ folders.");
    }

    const sortedSections = sections.sort(compareOrderThenLabel);
    const sortedDocuments = documents
        .map(({ default: isDefault, ...document }) => document)
        .sort((first, second) => {
            const firstSection = sortedSections.find((section) => {
                return section.id === first.sectionId;
            });

            const secondSection = sortedSections.find((section) => {
                return section.id === second.sectionId;
            });

            const sectionSort = compareOrderThenLabel(firstSection, secondSection);

            if (sectionSort !== 0) {
                return sectionSort;
            }

            return compareOrderThenLabel(first, second);
        });

    const manifest = {
        defaultDoc: getDefaultDoc(documents),
        sections: sortedSections,
        documents: sortedDocuments
    };

    await fs.writeFile(
        manifestPath,
        `${JSON.stringify(manifest, null, 4)}\n`,
        "utf8"
    );

    console.log("Manifest updated.");
}

async function getSectionFolders() {
    const entries = await fs.readdir(contentDir, {
        withFileTypes: true
    });

    return entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => {
            return {
                id: createSlug(entry.name),
                name: entry.name,
                path: path.join(contentDir, entry.name)
            };
        })
        .sort((first, second) => first.id.localeCompare(second.id));
}

async function createMissingSectionConfigs(sectionFolders) {
    for (const folder of sectionFolders) {
        const configPath = getSectionConfigPath(folder.id);

        if (await fileExists(configPath)) {
            continue;
        }

        const sectionConfig = {
            id: folder.id,
            label: titleCase(folder.name),
            kicker: "",
            order: 999,
            description: ""
        };

        await fs.writeFile(
            configPath,
            `${JSON.stringify(sectionConfig, null, 4)}\n`,
            "utf8"
        );

        console.log(`Created ${toPosixPath(path.relative(projectRoot, configPath))}`);
    }
}

async function deleteOrphanedSectionConfigs(activeSectionIds) {
    const entries = await fs.readdir(sectionsConfigDir, {
        withFileTypes: true
    });

    for (const entry of entries) {
        if (!entry.isFile() || !entry.name.endsWith(".json")) {
            continue;
        }

        const sectionId = createSlug(path.basename(entry.name, ".json"));

        if (activeSectionIds.has(sectionId)) {
            continue;
        }

        const configPath = path.join(sectionsConfigDir, entry.name);

        await fs.rm(configPath);
        console.log(`Deleted orphaned section config: ${entry.name}`);
    }
}

async function readSectionConfig(sectionId) {
    const configPath = getSectionConfigPath(sectionId);
    const rawConfig = await fs.readFile(configPath, "utf8");
    const config = JSON.parse(rawConfig);

    return {
        id: sectionId,
        label: config.label || titleCase(sectionId),
        kicker: config.kicker || "",
        order: toNumber(config.order) ?? 999,
        description: config.description || ""
    };
}

async function findMarkdownFiles(directory) {
    const entries = await fs.readdir(directory, {
        withFileTypes: true
    });

    const files = [];

    for (const entry of entries) {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            files.push(...await findMarkdownFiles(entryPath));
            continue;
        }

        if (entry.isFile() && entry.name.endsWith(".md")) {
            files.push(entryPath);
        }
    }

    return files.sort((first, second) => first.localeCompare(second));
}

function createDocument({ body, filePath, meta, sectionConfig }) {
    const id = createSlug(meta.id || path.basename(filePath, ".md"));
    const relativePath = toPosixPath(path.relative(projectRoot, filePath));
    const heading = getFirstHeading(body);
    const title = meta.title || heading || titleCase(path.basename(filePath, ".md"));

    return {
        id,
        title,
        label: meta.label || title,
        section: getSectionDisplay(sectionConfig),
        sectionId: sectionConfig.id,
        order: toNumber(meta.order) ?? 999,
        path: relativePath,
        icon: meta.icon || "book",
        default: meta.default === true || meta.default === "true"
    };
}

function splitFrontMatter(markdown) {
    if (!markdown.startsWith("---")) {
        return {
            meta: {},
            body: markdown
        };
    }

    const end = markdown.indexOf("\n---", 3);

    if (end === -1) {
        return {
            meta: {},
            body: markdown
        };
    }

    const rawMeta = markdown.slice(3, end).trim();
    const body = markdown.slice(end + 4).trim();

    return {
        meta: parseFrontMatter(rawMeta),
        body
    };
}

function parseFrontMatter(rawMeta) {
    const meta = {};

    rawMeta.split(/\r?\n/).forEach((line) => {
        const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);

        if (!match) {
            return;
        }

        meta[match[1].trim()] = parseValue(match[2].trim());
    });

    return meta;
}

function parseValue(value) {
    if (value === "true") {
        return true;
    }

    if (value === "false") {
        return false;
    }

    if (/^\d+$/.test(value)) {
        return Number(value);
    }

    return value.replace(/^["']|["']$/g, "");
}

function getDefaultDoc(documents) {
    const explicitDefault = documents.find((document) => document.default);

    if (explicitDefault) {
        return explicitDefault.id;
    }

    return documents.sort(compareOrderThenLabel)[0]?.id || "";
}

function getSectionDisplay(sectionConfig) {
    if (!sectionConfig.kicker) {
        return sectionConfig.label;
    }

    return `${sectionConfig.kicker} // ${sectionConfig.label}`;
}

function getFirstHeading(body) {
    const match = body.match(/^#\s+(.+)$/m);

    return match ? match[1].trim() : "";
}

function compareOrderThenLabel(first = {}, second = {}) {
    const firstOrder = first.order ?? 999;
    const secondOrder = second.order ?? 999;

    if (firstOrder !== secondOrder) {
        return firstOrder - secondOrder;
    }

    return getSortableLabel(first).localeCompare(getSortableLabel(second));
}

function getSortableLabel(item) {
    return item.label || item.title || item.id || "";
}

function getSectionConfigPath(sectionId) {
    return path.join(sectionsConfigDir, `${sectionId}.json`);
}

async function ensureDirectory(directory) {
    await fs.mkdir(directory, {
        recursive: true
    });
}

async function fileExists(filePath) {
    try {
        await fs.access(filePath);

        return true;
    } catch {
        return false;
    }
}

function createSlug(value) {
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function titleCase(value) {
    return String(value || "")
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function toNumber(value) {
    if (value === undefined || value === null || value === "") {
        return undefined;
    }

    const number = Number(value);

    return Number.isFinite(number) ? number : undefined;
}

function toPosixPath(value) {
    return value.split(path.sep).join("/");
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});