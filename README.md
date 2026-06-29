# NAKAMA: BATTLE PROWESS

This package is a Markdown-driven system reference document template for
NAKAMA: Battle Prowess, a tactical TTRPG developed by UrbanWarlockGames.

## Structure

- `index.html` contains the interface, design system CSS, loader, theme toggle,
  highlight controls, search, and Markdown renderer.
- `manifest.json` defines backend section groups, document order, and
  source paths.
- `content/*.md` files are rule modules listed by `manifest.json`. Replace
  or expand these files as the repository grows, then update the manifest.
- `assets/favicon.svg` and `assets/og-nakama-srd.svg` satisfy metadata and
  sharing requirements.

## Backend section organisation

Use `manifest.json` to organise the SRD without changing the interface.

```json
{
    "defaultDoc": "combat",
    "sections": [
        {
            "id": "battle-systems",
            "label": "Battle Systems",
            "kicker": "Section 03",
            "order": 3,
            "documents": ["combat", "powers"]
        }
    ],
    "documents": [
        {
            "id": "combat",
            "title": "Combat Flow",
            "label": "Combat Flow",
            "section": "Section 03 // Battle Systems",
            "sectionId": "battle-systems",
            "order": 1,
            "path": "content/combat-flow.md",
            "icon": "swords"
        }
    ]
}
```

The `sections` array controls the sidebar group order. Each section can list
document IDs directly through `documents`. If that list is omitted, the loader
falls back to every document whose `sectionId` matches the section ID, sorted by
the document `order`.

## Highlight controls

Open the reference options button in the header to change the system highlight.
The template includes orange, red, pink, and purple presets plus a custom color
selector. The selected value is stored in `localStorage` under
`nakama-accent`.

## Search

The header search indexes document headings, subheadings, Power entries, Power
keywords, body text, and section metadata. Search results are weighted so direct
matches appear in this order:

1. Header
2. Subheader
3. Body text
4. Section

Write concise headings and consistent Power keywords to make search results
useful.

## Markdown blocks

Use these blocks to create consistent SRD highlights:

```markdown
:::rule title="Initiative Roll"
Concise Rules text. For longer rules text, such as one that requires a list or chart, or cards, write a new heading instead.
:::

:::note title="Design Note: Optional Reactions"
Clarifying text, reminders, or table guidance.
:::

:::archive title="Archive Entry: #409"
Lore text.
:::
```

### Rule and note title guidelines

Use highlight block titles to explain the purpose of the callout at a glance.
Keep titles short, specific, and written in title case.

Use `:::rule` when the block contains a rule players or GMs must apply during
play. The title should name the rule, procedure, exception, or timing point.

```markdown
:::rule title="Forced Movement and Collision"
Physical Targets do not deal or receive direct damage through forced movement
unless Collision, Falling, or hazardous terrain applies.
:::
```

Good rule titles usually answer “what rule am I looking at?” Examples:

- `Initiative Roll`
- `Basic Duration`
- `Forced Movement and Collision`
- `Weak Hit Reactions`
- `Elemental Damage`
- `Improvised Alterations`

Use `:::note` when the block explains, clarifies, reminds, or gives table-facing
advice without adding a new rule. The title should identify the kind of help the
note provides.

```markdown
:::note title="Note: Targets and Descriptions"
A Power's visual description does not change what its Ability can affect.
:::
```

Good note titles usually answer “why should I read this?” Examples:

- `Note: Player Choice`
- `Reminder: Specific Durations`
- `GM Guidance: Improv Interactions`
- `Example: Physical Fire`
- `Clarification: Elemental Targets`

Use `:::archive` for lore, setting excerpts, in-world records, and flavour
material. Archive titles should read like documents, files, rumours, or records,
not active rules.

```markdown
:::archive title="Archive Entry: The Red Comet"
Witness accounts describe a Falling star that turned aside before impact.
:::
```

Avoid vague titles such as `Important`, `Warning`, `Info`, or `Special Rule`.
Prefer a title that would still make sense in search results.

## Power blocks

Use `:::power` for any discrete rules card that players or GMs need to search and use at the table. Do not create separate card block names for Actions, GM Moves, Reactions, Conditions, or Features. Instead, identify the card type through key.

```markdown
:::power title="Hurl" key="Attack, Damage, Forced Movement"
Move the Target forcefully in a Line. Physical Targets use Collision, Falling, or hazardous terrain for damage. Elemental Targets deal Potency damage.
:::
```

```markdown
:::power title="Complication" key="GM Move, Weak Hit, Complication" cost="1 Malice"
**Trigger:** A Player rolls a Weak Hit.
The Player receives a Complication to their roll. The GM decides if the Player rolls or the GM chooses the Complication.
:::
```

### Triggers

A Trigger must state the concrete game event that allows or requires the card to be used. Do not write permission-style triggers like “when you can react.” Write the actual condition, such as “You are about to take damage,” “A Player rolls a Weak Hit,” or “The Target attempts to perform the declared Taboo action.”

### Power attributes

- `title` is the card title. Use the Ability or Interaction name.
- `key` is a comma-separated keyword list used for scanning and search.
- `cost` is the PP cost. Use a plain number, such as `2` or `4`.
- `tier` is optional Hit Tier shorthand.

Do not use player-build fields such as Affinity, Potency Value, Target, or
Alterations unless they are part of the rule itself. Those are chosen when a
player builds a specific Power.

### Cost syntax

Base Abilities usually omit `cost`, or use `cost="0"` if you want the card to
show a zero-cost badge.

```markdown
:::power title="Explode" key="Hurl, Interaction, Damage, Area" cost="2"
Hurl deals Potency damage in a Medium Area on impact.
:::
```

### Hit Tier syntax

Use `tier` when the rule changes by Hit Tier. Write the values in
Weak Hit | Hit | Strong Hit order.

```markdown
:::power title="Mark" key="Hurl, Interaction, Charm" cost="2" tier="—|MARKED|MARKED"
Apply the Marked condition to an Obstacle the Target you Hurl collides with,
ending your Target's movement.
:::
```

Use an em dash (`—`) when a Hit Tier has no special effect.

```markdown
:::power title="Pin" key="Hurl, Interaction, Charm" cost="4" tier="—|—|PRONE"
Knock the Target or Obstacle Prone.
:::
```

### BASIC Hit Tier syntax

Use `tier="BASIC"` when the rule has one basic Hit result instead of separate
Weak Hit, Hit, and Strong Hit entries. The card renders one centred Hit Tier
box labeled `Hit` with the value `BASIC`.

```markdown
:::power title="Ricochet" key="Hurl, Interaction, Forced Movement" cost="3" tier="BASIC"
After impact, you may Move the Target again a number of meters equal to the
Distance of the Tier Result.
:::
```

Use `BASIC` for effects that are active once purchased, or effects that refer to
the Ability's existing Hit Tier result without adding their own tier spread.

## Power keyword guide

Keywords are short rules tags. They should describe what the card does, not how
a player has customized a finished Power. Keep them consistent so players can
search for the kind of rule they want.

### Core card keywords

- `Ability` identifies a base Ability card when useful.
- `Interaction` identifies an Ability-specific upgrade.
- `Hurl`, `Control`, `Create`, `Know`, and other Ability names connect an
  Interaction to its parent Ability.
- `Basic Duration` marks rules that use the system's basic Duration.
- `Passive` marks rules that are active once purchased and do not add a new
  roll structure.
- `Reaction` marks rules that can trigger outside the user's normal action.

### Action and targeting keywords

- `Attack` means the rule has a Target and is a hostile action.
- `Area` means the rule affects an Area rather than only one Target.
- `Self` means the rule is limited to the user.
- `Ally` means the rule supports or affects friendly Targets.
- `Enemy` means the rule is aimed at hostile Targets.
- `Object`, `Creature`, and `Terrain` identify important Target restrictions.

### Effect keywords

- `Damage` deals damage directly or creates damage through another rule.
- `Heal` restores Health, Stamina, Belief, Armour, or another resource.
- `Charm` applies a social, mental, emotional, or behavioural condition.
- `Condition` applies, removes, or modifies a named condition.
- `Forced Movement` moves a Target through space.
- `Movement` changes ordinary movement, speed, or positioning.
- `Control` changes what a Target can do, choose, remember, or perceive.
- `Communication` sends, receives, limits, or alters communication.
- `Memory` alters memories, recall, or awareness of past events.
- `Sense` reveals information through perception or supernatural awareness.
- `Detection` reveals hidden creatures, objects, Powers, or locations.
- `Support` improves an Ally's roll, damage, defence, or options.
- `Defense` prevents, reduces, redirects, or resists harm.
- `Summon` creates or calls an allied entity.
- `Create` creates an entity, object, terrain, or persistent effect.
- `Transform` changes a body, form, property, or state.
- `Teleport` moves a Target without crossing the intervening space.
- `Barrier` creates protection, cover, containment, or separation.
- `Hazard` creates harmful terrain, zones, or ongoing risks.

### Resource keywords

- `Health` restores, damages, protects, or checks Health.
- `Stamina` restores, damages, protects, or checks Stamina.
- `Belief` restores, damages, protects, or checks Belief.
- `Armour` restores, damages, protects, or checks Armour.
- `PV` means the rule directly references Potency Value.
- `Distance` means the rule directly references movement distance.
- `Size` means the rule depends on Target or Area Size.

### Element and material keywords

- `Elemental` marks rules that create or use Elemental Targets or traits.
- `Physical` marks rules that require or affect tangible Targets.
- `Fire`, `Frost`, `Lightning`, `Water`, `Earth`, `Light`, and `Darkness`
  identify common Elemental themes.
- `Metal`, `Item`, `Earth`, `Wood`, and similar material tags identify
  Specific Object requirements.

Add new keywords when a rule needs a searchable concept that is not already
covered. Prefer one clear keyword used repeatedly over several near-duplicates.

## Local preview

Serve the folder with any static server so `fetch()` can load
`manifest.json` and the listed Markdown files:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
