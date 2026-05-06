## Ability Creation

Each character receives **10 Ability Points (AP)** at character creation. These points are spent across all of the character's starting Abilities.

An Ability is built from the following parts:

- **Action:** what is done
- **Target:** to whom
- **Potency:** the Ability's die size (if relevant) and Potency Value.
- **Alterations:** general upgrades available to all Abilities: Range, Duration, Deadly, Area, Filters, and Target Size.
- **Interactions:** unique upgrades for specific Actions that add new interactions in Tactical mode.

## Actions

The Action defines what the Ability fundamentally does and, when paired with a Target what it can affect. Each Action has base values for Range, Duration, Distance, and Effects, as well as unique upgrades called Interactions. Actions are limited in scope to only being able to do what they are described to be able to do, and only to their designated Target.

## Targets

Targets are split into Elemental (abstract, non-physical) and Physical (tangible objects or creatures in the game world; some Actions may require a Specific Object, such as Metal, Weapon, Rock, etc.) Targets. Physical Targets require a Size descriptor, beginning at the Small size, which can be upgraded as an Alteration to any Ability.

Elemental Targets, however, are more *abstract* in nature, and may be generated from nothing, but only last as long as the duration of the Ability. Some Elemental Targets, such as Fire, may also physically exist in the game world, and can be specified as Physical Targets with a designation such as **Small Fire**. However, being able to < Hurl: Small Fire > means you can ONLY use the Hurl action on physical sources of Fire. This also extends to < Control: Fire >, in which only Elemental Fire, which disappears after the Ability's Duration, can be Controlled using that Ability.

### Example Targets

- Elemental: Fire, Water, Earth, Light, Darkness
- Physical: Self, Creature, Object

## Potency

Each Ability has a **Potency Value** (PV) of 0 by default. It costs 2 Ability Points to increase the Potency up by one stage. After that, the cost to increase your Potency doubles with each step, going from 2, to 4, to 6, to 8 Ability Points.

The **Potency Value** is used to calculate the Effects of your Ability, as well as your Ability's dice pool modifier [Skill + PV].

## Hit Tiers

Roll outcomes use three result tiers: A **Strong Hit**, a **Hit**, or a **Weak Hit**.

A roll is a **Weak Hit** when *no* 6s are rolled from your dice pool. This gives the weakest form of the Effect as described in the Action. If this roll is an Attack, it will also trigger a Reaction from the Target, if applicable. 

A roll is a **Hit** when *exactly one* 6 is rolled from your dice pool. This gives the basic effect of your Action.

A roll is a **Strong Hit** when *two or more* 6s are rolled from your dice pool. This gives an enhanced Effect from your Action, such as double damage.

## Alterations and Interactions

### Alterations

**Alterations** are general upgrades available to all Abilities. They improve values an Ability already has, but they do not create new functions. If an Ability lacks a value, the relevant Alteration cannot be purchased unless an Interaction or Action first grants that value.

Altering the **Area** of your Action costs 3 AP per additional +1 meter to its radius. Most Effects start with a 1x1 Area of Effect, affecting only a single Target.

Altering the **Range** of your Action costs 1 AP per additional +1 meter to its Range, drawn as a line from you to the Target.

Altering the **Duration** of your Action costs 4 AP per turn the Effects of your Action last for.

Altering the **Reliablility** of one of your Action's Interactions costs 4 AP to trigger on a Hit or better, or 8 AP for a Weak Hit or better.

Altering the **Distance** of your Action costs 2 AP per additional +1 meter to the maximum distance you may move the Target.

If your Ability affects a Physical Target, you may increase the maximum affected Size of the Target for 3 AP per Size category, starting at Size 0 (Small) by default.

Giving your Ability the **Deadly** trait gives you a flat +1 damage to your Attack after calculations are made. So, if an effect halves or doubles the damage you deal, such as rolling a Weak Hit or Strong Hit, the +1 is applied after the damage is increased or reduced.

### Interactions

**Interactions** are Action-specific upgrades that add new Effects to the Ability.

## Size

Every Physical Target and Area must specify **Size** as part of its entry. The only exception is **Self**, which always refers to the user regardless of Size.

A Size 0 (Small) Object or Creature occupies an area of 50 × 50 cm or smaller. Each other Size category refers to the space an Object or Creature occupies in an x by x Area cube. So, a 200 cm tall person would be Size 2 (Large), because they occupy a physical space of two meters in height. Likewise, a 160 cm tall person would be Size 1 (Medium), as they occupy a space between 1-2 m in height, length, and width.

## Forced Movement

Physical Targets do not deal or receive direct damage through forced movement. Instead, they deal/receive damage only through Collision, Falling, or while moving through hazardous terrain. The Creature, Object, or Terrain the Target collides with is referred to as the Obstacle. Both the Target and the Obstacle receive damage from the impact, with the Obstacle receiving full damage, while the Target receives 1/2 damage.

Collision Damage = Distance travelled (meters travelled before impact) + Size

## Example Action: Hurl

The **Hurl** Action moves the **Target** forcefully in an orthogonal line from their initial position to another position within 1 meter a number of meters determined by the Result Tier. The damage dealt depends on whether the Target is **Physical** (Collision, representing moving a physical entity through space) or **Elemental** (Potency Value, representing the raw power of your Ability).

On a Weak Hit, the Target only moves 1 meter.

On a Hit, you may move the Target up to a number of meters equal to 4 + the Ability's Potency Value.

On a Strong Hit, you may move the Target up to a number of meters equal to 6 + the Ability's Potency Value.

### Hurl Interactions

The Interactions for Hurl are Explode, Mark, Ricochet, Launch, and Pin.

Explode costs 2 AP and deals Potency damage in a Medium Area on Impact.

Mark costs 2 AP and applies the Marked condition on a Strong Hit. Marked may be consumed by an Ally for +1 die on their next Attack against the Marked target.

Ricochet costs 3 AP and allows you to move the Target again after impact a number of meters equal to the Distance of the Tier Result. If the Target's path intersects with a Creature, Object, or Terrain, it stops the movement immediately before Collision.

Launch costs 3 AP and allows you to move the Target vertically upwards along its path. You may not move it downwards. If the Target ends its movement off the ground, it is Falling until the end of its turn, when it falls.

Pin costs 4 AP and knocks the Target or Obstacle Prone on a Strong Hit.

## Tables

### Alterations

| Alteration | Cost | Effect |
|---|---:|---|
| Area | 3 AP | +1 m to Area radius |
| Range | 1 AP | +1 m to targeting Range |
| Deadly | 2 AP | +1 damage |
| Distance | 2 AP | +1 m to forced movement distance travelled |
| Duration | 4 AP | +1 turn |
| Size | 3 AP | +1 Target Size |

### Size

| Size | Name | Space |
|---:|---|---|
| 0 | Small | 50 × 50 cm or smaller |
| 1 | Medium | 1 × 1 m cube or smaller |
| 2 | Large | 2 × 2 m space |
| 3 | Huge | 3 × 3 m space |
| 4+ | — | +1 x +1 m space |
