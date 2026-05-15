<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Power Creation](#power-creation)
- [Abilities](#abilities)
- [Targets](#targets)
  - [Example Targets](#example-targets)
- [Potency](#potency)
- [Hit Tiers](#hit-tiers)
- [Affinities](#affinities)
  - [Body](#body)
  - [Mind](#mind)
  - [Social](#social)
- [Alterations and Interactions](#alterations-and-interactions)
  - [Alterations](#alterations)
  - [Interactions](#interactions)
- [Size](#size)
- [Forced Movement](#forced-movement)
- [Ability: Hurl](#ability-hurl)
  - [Hurl Interactions](#hurl-interactions)
- [Ability: Control](#ability-control)
  - [Control Interactions](#control-interactions)
- [Ability: Create](#ability-create)
  - [Create Interactions](#create-interactions)
- [Know](#know)
  - [Know Interactions](#know-interactions)
- [Transform](#transform)
  - [Transform Interactions](#transform-interactions)
- [Tables](#tables)
  - [Alterations](#alterations-1)
  - [Size](#size-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Power Creation

Each character receives **10 Power Points (PP)** at character creation. These points are spent across all of the character's starting Abilities.

An Power is built from the following parts:

- **Affinity** what Attribute is used
- **Ability:** what is done
- **Target:** to whom
- **Potency:** the Power's die size (if relevant) and Potency Value.
- **Alterations:** general upgrades available to all Abilities: Range, Duration, Deadly, Area, Filters, and Target Size.
- **Interactions:** unique upgrades for specific Abilities that add new interactions in Tactical mode.

## Abilities

The Ability defines what the Power fundamentally does and, when paired with a Target what it can affect. Each Ability has base values for Range, Duration, Distance, and Effects, as well as unique upgrades called Interactions. Abilities are limited in scope to only being able to do what they are described to be able to do, and only to their designated Target.

## Targets

Targets are split into Elemental (abstract, non-physical) and Physical (tangible objects or creatures in the game world; some Abilities may require a Specific Object, such as Metal, Weapon, Rock, etc.) Targets. Physical Targets require a Size descriptor, beginning at the Small size, which can be upgraded as an Alteration to any Power.

Elemental Targets, however, are more *abstract* in nature, and may be generated from nothing, but only last as long as the duration of the Power. Some Elemental Targets, such as Fire, may also physically exist in the game world, and can be specified as Physical Targets with a designation such as **Small Fire**. However, being able to < Hurl: Small Fire > means you can ONLY use the Hurl action on physical sources of Fire. This also extends to < Control: Fire >, in which only Elemental Fire, which disappears after the Power's Duration, can be Controlled using that Power.

### Example Targets

- Elemental: Fire, Water, Earth, Light, Darkness
- Physical: Self, Creature, Object

## Potency

Each Power has a **Potency Value** (PV) of 0 by default. It costs 2 Power Points to increase the Potency up by one stage. After that, the cost to increase your Potency doubles with each step, going from 2, to 4, to 6, to 8 Power Points.

The **Potency Value** is used to calculate the Effects of your Power, as well as your Power's dice pool modifier, equal to your chosen Attribute + the Potency Value of the Power.

## Hit Tiers

Roll outcomes use three result tiers: A **Strong Hit**, a **Hit**, or a **Weak Hit**.

A roll is a **Weak Hit** when *no* 6s are rolled from your dice pool. This gives the weakest form of the Effect as described in the Ability. If this roll is an Attack, it will also trigger a Reaction from the Target, if applicable.

A roll is a **Hit** when *exactly one* 6 is rolled from your dice pool. This gives the basic effect of your Ability.

A roll is a **Strong Hit** when *two or more* 6s are rolled from your dice pool. This gives an enhanced Effect from your Ability, such as double damage.

## Affinities

When creating an Power, you may choose which Attribute you use when you make an Power roll. Each Attribute has an Affinity, a special upgrade that applies to all Abilities that use that Attribute. The usage of any associated Affinity actions is shared across all Abilities using that Attribute. Any Free Alterations with cumulative costs give you the first Rank of that Alteration for free, meaning you must use the Rank II Alteration if you purchase the upgrade.

### Body
- Might: Free Alteration (Size) — +1 Size of Target.
- Agility: Finesse — Once per Episode, you may use an Agility Power as swift action. If that Power or Interaction is already a minor action, it becomes a free action instead. 
- Fitness: Overdrive — Once per Episode, when you roll an Power using Fitness, you may suffer Strain equal to your Level to increase the Hit Tier by one step. If you reach 0 Stamina, any leftover damage becomes Health or Morale damage (your choice).

### Mind
- Knowledge: Elemental Affinity — When you create an Power using Knowledge, you may add one Elemental Trait for 1 PP. Any contact conditions are applied on a Hit and the Vulnerability Condition on a Strong Hit. If the Target has a Vulnerability to the damage type, it is applied on a Hit+ instead.
- Perception: Free Alteration (Range) — +1 Range.
- Willpower: Free Alteration (Duration) — +1 Duration.

### Social
- Charm: Off Guard — You gain a +1 against unaware or friendly Targets the first time this Power is used in a Scene.
- Rhetoric: Cost Reduction (Condition) — Reduce the cost of any Interaction that applies a Condition by 1 PP. You may also choose to create an Improv Interaction that applies a Condition on a Strong Hit with a cost determined by the base Condition cost.
- Leadership: Supportive — Add the number of 6s rolled to healing effects for Health, Stamina, Morale, and Armour while using this Power.

## Alterations and Interactions

### Alterations

**Alterations** are general upgrades available to all Abilities. They improve values an Power already has, but they do not create new functions. If an Power lacks a value, the relevant Alteration cannot be purchased unless an Interaction or Ability first grants that value.

Altering the **Area** of your Ability costs 3 PP per additional +1 meter to its radius. Most Effects start with a 1x1 Area of Effect, affecting only a single Target.

Altering the **Range** of your Ability costs 1 PP per additional +1 meter to its Range, drawn as a line from you to the Target.

Altering the **Duration** of your Ability costs 4 PP per turn the Effects of your Ability last for.

Altering the **Reliability** of one of your Ability's Interactions costs 4 PP to trigger on a Hit or better, or 8 PP for a Weak Hit or better.

Altering the **Distance** of your Ability costs 2 PP per additional +1 meter to the maximum distance you may move the Target.

If your Power affects a Physical Target, you may increase the maximum affected Size of the Target for 3 PP per Size category, starting at Size 0 (Small) by default.

For 3 PP, you may give your Power the **Deadly** trait. You gain a flat +1 damage to your Attack with this Power after calculations are made. So, if an effect halves or doubles the damage you deal, such as rolling a Weak Hit or Strong Hit, the +1 is applied after the damage is increased or reduced.

For 3 PP, you may give your Power the **Subtle** trait. When using this Power, you make no noise, gestures, or other direct evidence that you are using the Power, so long as it does not cause direct damage to a Target.

For 3 PP, you may give your Power an **Elemental** trait. Any damage dealt by the Power deals the appropriate Elemental damage. Any contact Conditions are applied on a Weak Hit+ and the Vulnerability Condition on a Strong Hit. If the Target has a Vulnerability to the damage type, it is applied on a Hit+ instead.

For 2 PP, you may give your Power the **Versatile** trait. If your Power has multiple damage types, you may choose one each time you make an Attack. You may also choose to make your Power Incapacitating, dealing non-lethal damage.

**Improv Alteration**: If you have an idea for an Alteration or Interaction not covered in the rules, ask your GM and they will work with you on balancing it.

### Interactions

**Interactions** are Ability-specific upgrades that add new Effects to the Power.

## Size

Every Physical Target and Area must specify **Size** as part of its entry. The only exception is **Self**, which always refers to the user regardless of Size.

A Size 0 (Small) Object or Creature occupies an area of 50 × 50 cm or smaller. Each other Size category refers to the space an Object or Creature occupies in an x by x Area cube. So, a 200 cm tall person would be Size 2 (Large), because they occupy a physical space of two meters in height. Likewise, a 160 cm tall person would be Size 1 (Medium), as they occupy a space between 1-2 m in height, length, and width.

## Forced Movement

Physical Targets do not deal or receive direct damage through forced movement. Instead, they deal/receive damage only through Collision, Falling, or while moving through hazardous terrain. The Creature, Object, or Terrain the Target collides with is referred to as the Obstacle. Both the Target and the Obstacle receive damage from the impact, with the Obstacle receiving full damage, while the Target receives 1/2 damage.

Collision Damage = Distance travelled (meters travelled before impact) + Size

## Ability: Hurl

The **Hurl** Ability moves the **Target** forcefully in an orthogonal line from their initial position to another position within 1 meter a number of meters determined by the Result Tier. The damage dealt depends on whether the Target is **Physical** (Collision, representing moving a physical entity through space) or **Elemental** (Potency Value, representing the raw power of your Power).

On a Weak Hit, the Target only moves 1 meter.

On a Hit, you may move the Target up to a number of meters equal to 4 + the Power's Potency Value.

On a Strong Hit, you may move the Target up to a number of meters equal to 6 + the Power's Potency Value.

### Hurl Interactions

The Interactions for Hurl are Explode, Mark, Ricochet, Launch, and Pin.

Explode costs 2 PP and deals Potency damage in a Medium Area on Impact.

Mark costs 2 PP and applies the Marked condition on a Strong Hit. Marked may be consumed by an Ally for +1 die on their next Attack against the Marked target.

Ricochet costs 3 PP and allows you to move the Target again after impact a number of meters equal to the Distance of the Tier Result. If the Target's path intersects with a Creature, Object, or Terrain, it stops the movement immediately before Collision.

Launch costs 3 PP and allows you to move the Target vertically upwards along its path. You may not move it downwards. If the Target ends its movement off the ground, it is Falling until the end of its turn, when it falls.

Pin costs 4 PP and knocks the Target or Obstacle Prone on a Strong Hit.

## Ability: Control

The **Control** Ability allows you to Interact with a General Physical Target [choose: Small Creature, Object, or Terrain] at a Range of 1 + Potency Value meters. The Target may feel your touch. If your Ability is Elemental in nature, they may feel the Element, such as a light *heat* from Fire, *cold* from Frost, or a harmless *static shock* from Lightning.

### Control Interactions

Communication [2 PP]: You may communicate with the Target. They hear your voice as a distant echo, and cannot directly place its source or point of origin unless they can Sense you using the Power.

Charm [3 PP]: You may influence the Disposition of the Target, the Effects of which are determined by the Hit Tier. On a Weak Hit, you may nudge the Target's Disposition one degree. On a Hit, you may nudge the Target's Disposition two degrees or issue a Command using their minor action, which they will follow so long as it does not cause immediate harm to them or their Allies. On a Strong Hit, you may nudge the Target's Disposition three degrees or issue a Command using their standard or minor action, which they must obey. In addition, a Target is Charmed, meaning it cannot take hostile actions against you for the Duration. If the Target witnessed you use this Power on it, it remains aware after the Effect ends.

Confuse [4 PP]: On a Weak Hit, the Target will laugh off or ignore any non-harmful Abilities you take against it for a number of rounds in Tactical Mode, or seconds in Narrative Mode, equal to the Potency Value of this Power. On a Hit, the Target becomes Confused, unable to tell Allies from Enemies. It will act according to its nature in this disoriented state for the Duration. On a Strong Hit, it becomes Berserk, attacking the nearest Entity, prioritising Hostile Creatures, followed by Creatures within range of its basic attack. You may choose the effects of a lower Hit Tier if it is beneficial to you.

Puppet [6 PP]: You take direct control of a Target during its turn in Tactical Mode for a number of rounds determined by your Hit Tier. Weak Hit: Potency Value (initial resist + end of each of the Target's turns) rounds, Hit: Potency Value (resist end of each of the Target's turns) rounds, Strong Hit: Potency Value rounds. In Narrative Mode, this Interaction's Duration lasts for a number of minutes equal to 10 x the remaining Duration. If a Target successfully resists this Power or the Effect ends, you gain a -2 ongoing penalty on future attempts to Puppet the Target.

Mind Blank [6 PP]: In Tactical Mode, the Target forgets the past number of rounds equal to the Duration of the Power. In Narrative Mode, it forgets the past 10 x the remaining Duration minutes.

## Ability: Create

The **Create** Ability creates a new instance of a **Target** within a range of 1 meter for a number of rounds equal to 2 + your Potency Value. The Entity (Creature, Object, or Terrain) created is a generic form of the specified Target. For example, < Create: Small Creature > is an invalid Power. < Create: Small Wolf > is valid, but cannot be used to replicate a specific wolf you know or have seen, and you have no control over its appearance or disposition. The Entity uses the Potency of this Power for all checks, Damage, Health and Move. Terrain and Objects have a Move of 0 meters. You may have no more Creations active at once than your Potency Value.

### Create Interactions

Summon Ally [2 PP]: The Target is considered an Ally and will fight alongside you for the Duration. You and your Allies are still affected by any Effects the Entity creates, such as hazardous terrain. As a minor action, you may control the Entity on your Turn in Tactical Mode, otherwise it acts according to its nature.

Quick [3 PP]: The Entity's Move value increases by 2 meters.

Durable [4 PP]: The Entity has Damage Resistance equal to the Potency Value of this Power.

Slowing [3 PP]: The Entity creates *slowing terrain* inside its Area, halving the Movement of all Entities who enter its Area.

Hazardous [4 PP]: The Entity creates *hazardous terrain* inside its Area, dealing PV Damage to all Creatures who end their turn within its Area.

Persistent [4 PP]: The Duration is considered doubled at no extra cost, aside from the cost of this Interaction. In Narrative Mode, the Entity lasts for a number of minutes equal to ten times the remaining Duration.

Masterwork Weapon [4 PP]: While wielded by you, a created Object's Item bonus is equal to your Potency Value.

Replicate [6 PP]: You may replicate a specific Target's appearance, modify the appearance of a Created Entity, or apply one Elemental Trait to it.

## Know

The **Know** Ability allows you to learn an amount of information about a Target within Range or following specific Triggers. When you use this Power, you learn any Conditions an Entity is affected by and whether it is Bloodied.

### Know Interactions

Quick Thinking [1 PP]: In Tactical Mode, you may use this Power as a minor action instead of a standard action, if it is beneficial to you.

Analyse [2 PP]: You learn the statistics (current Health, Move, Strike Value, and Elemental Traits) of a Target you can Sense with a precise Sense. For an additional 1 PP, you may also learn the Target's Level, Highest Resistance, and if they have an Power in one of the following categories: Buff, Debuff, Control, Damage, Healing, and its Target. For a total of 4 PP, you may choose to learn one Power they possess, any any Innate Abilities they possess (such as darkvision).

Locate: [2 PP]: You learn Target's imprecise location within a number of kilometres equal to the Range of this Power. For an additional 2 PP, you may Track the Target's precise location as they move, so long as they do not leave the Locate Area.

Read Emotional Resonance [2 PP]: You may read Target's surface disposition and/or emotions. Ask the Target (Weak: 1, Hit: 2, or Strong: 3) questions. The Target answers as it would perceive them.
For an additional 4 PP, you may Read the thoughts or memories of a Target, even if it lacks an emotional resonance or a brain. If the Target is no longer alive, it only knows what it has perceived up until its death. The GM must answer any questions truthfully, while still limited by what the Target knows.

Detect [3 PP]: You learn if there are any hidden creatures within Range. For an additional 2 PP, you learn their imprecise location until they Move.

## Transform

You can Transform your body in new ways. You gain a signature transformation. You may choose how it radically changes your appearance. You may gain muscles, height, change hair or eye colour, or any other changes to indicate you have gained power, and gain new changes after each consecutive transformation. You may transform into your signature transformation a number of times equal to your Potency Value each Episode. In addition, you gain one of the following transformation types equal to your PV. Choose from the following features:
- Animal Transformation: You take the form of any mundane animal up to one Size larger or smaller than your base Size.
- Elemental Transformation: You gain one Elemental Tag of your choice for the Duration.
- Energising Transformation: You may add half the Potency Value of this Power (minimum 1) to all Body, Mind, or Social Attributes for the Duration of this Power. Each time you use this Power in a Scene, the bonus increases by +1.
- Monstrous Transformation: You take the form of a monster, either of your own creation or from folklore or literature up to one Size larger or smaller than your base Size.
- Persistent Transformation: You may take Strain equal to your Level to use this Power one time past its usual limit. This does not count towards your number of usages.
- Powerful Transformation: Strikes using Might gain Pushing and Launching for the Duration of your Transformation.
- Quick Transformation: Your first Transformation in a Scene is only a minor action.
- Terrifying Transformation: Your transformation radically changes your form that others may find disturbing or outright frightening. You gain +1 to all Frighten checks against Targets equal to or less than your Level.
- Weaponised Transformation: You may add the Potency Value of this Power to your Strikes for the Duration.

### Transform Interactions
- Transmogrify [4]: You may target an Object with this ability. Choose one of your Transformation Types to give them and describe their new appearance. You may choose to give them a humanised appearance if you wish.
- Polymorph [8]: You may target a Creature with this ability. Choose one of your Transformation Types to give them and describe their new appearance.

## Tables

### Alterations

| Alteration | Cost | Effect |
|---|---:|---|
| Area | 3 PP | +1 m to Area radius |
| Range | 1 PP | +1 m to targeting Range |
| Deadly | 2 PP | +1 damage |
| Distance | 2 PP | +1 m to forced movement distance travelled |
| Duration | 4 PP | +1 turn |
| Size | 3 PP | +1 Target Size |

### Size

| Size | Name | Space |
|---:|---|---|
| 0 | Small | 50 × 50 cm or smaller |
| 1 | Medium | 1 × 1 m cube or smaller |
| 2 | Large | 2 × 2 m space |
| 3 | Huge | 3 × 3 m space |
| 4+ | — | +1 x +1 m space |
