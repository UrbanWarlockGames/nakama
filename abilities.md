// WIP ability rules
Each character receives **10 Ability Points (AP)** at character creation. These points are spent across all of the character's starting Abilities.

An Ability is built from the following parts:

- **Action:** what is done
- **Target:** to whom
- **Potency:** the Ability's die size (if relevant) and Potency Value.
- **Alterations:** general upgrades available to all Abilities: Range, Duration, Deadly, Area, Filters, and Target Size.
- **Interactions:** unique upgrades for specific Actions that add new interactions in Tactical mode.

## 1. Action

The Action defines what the Ability fundamentally does and, when paired with a Target what it can affect. Each Action has base values for Range, Duration, Distance, and Effects, as well as unique upgrades called Interactions. Actions are limited in scope to only being able to do what they are described to be able to do, and only to their designated Target.

## 2. Targets

Targets are split into Elemental (abstract, non-physical) and Physical (tangible objects or creatures in the game world) Targets. Physical Targets require a Size descriptor, beginning at the Small size, which can be upgraded as an Alteration to any Ability. Elemental Targets, however, are more *abstract* in nature, and may be generated from nothing, but only last as long as the duration of the Ability. Some Elemental Targets, such as Fire, may also physically exist in the game world, and can be specified as Small Fire. However, being able to < Hurl: Small Fire > means you can ONLY use the Hurl action on physical sources of Fire. This also extends to < Control: Fire >, in which only Elemental Fire, which disappears after the Ability's Duration can be Controlled.

### Example Targets

Elemental:
- Fire
- Water
- Earth
- Light
- Darkness

Physical:
- Self (Size not needed to be specified)
- Creature
- Object (some Actions may require a Specific Object, such as Metal, Weapon, Rock, etc.)

## 3. Example Pairings

Example **Action + Target** pairings:

- < Hurl: Small Object >
- < Hurl: Fire >
- < Create: Small Fire >
- < Alter: Medium Creature >
- < Hurl: Self >

## 4. Potency

Each Ability has a **Potency Die** and a **Potency Value (PV)**.

The **Potency Die** is rolled when the Ability calls for variable Damage or another rolled Effect. // note: this part may be removed later if flat damage is preferred.

The **Potency Value** is a fixed number used for scaling formulas such as movement Distance, Duration, Area, or Size, as well as your Ability's dice pool modifier.

Your **Potency Value** equals **the number of Potency steps above d4**, a shown in the Table below:

| Potency Die | Total AP Cost | Potency Value |
|---|---:|---:|
| d4 | 0 AP | 0 |
| d6 | 2 AP | 1 |
| d8 | 4 AP | 2 |
| d10 | 6 AP | 3 |
| d12 | 8 AP | 4 |

## 5. Hit Tiers

Roll outcomes use three result tiers:

| Result | Default Role |
|---|---|
| Strong Hit | Critical effect. Usually triggers purchased Interactions at their base Reliability. |
| Hit | Basic effect. |
| Weak Hit | Minimum effect. Usually triggers a Reaction from the Target. |

## 6. Alterations

**Alterations** are general upgrades available to all Abilities. They improve values an Ability already has, but they do not create new functions. If an Ability lacks a parameter, the relevant Alteration cannot be purchased unless an Interaction or Action first grants that parameter.

| Alteration | Cost | Effect |
|---|---:|---|
| Area | 3 AP | +1 m to Area radius. |
| Range | 1 AP | +1 m to targeting Range. |
| Deadly | 2 AP | +1 damage. |
| Distance | 2 AP | +1 m to forced movement distance travelled. |
| Duration | 4 AP | +1 turn. |
| Size | 3 AP | +1 Target Size. |

## 7. Interactions

**Interactions** are Action-specific upgrades that change how an Ability functions. Unlike Alterations, they add new Effects to the Action.

## 8. Reliability

Some Interactions trigger only on Strong Hits by default. Players may pay extra AP to make them trigger on weaker result tiers.

| Tier | Cost |
|---:|---:|
| Strong Hit only | Base cost
| Hit or better | +4 AP
| Weak Hit or better | +8 AP

## 9. Example Action: Hurl

The **Hurl** Action moves the **Target** forcefully in line from their initial position to another position within Range. If the Target collides with a Creature or Object during its movement, it must follow Collision rules. The damage dealt depends on whether the Target is **Physical** or **Elemental**.

| Value | Hurl Base |
|---|---|
| Range | 1 m |
| Distance | 4 + Potency Value meters |
| Duration | Instant |
| Path | Line (Orthogonal) |
| Damage | Physical uses Collision rules; Elemental uses Potency damage. |
| Hit | Move the Target 1 m. |
| Weak Hit | Move the Target up to Distance. |
| Strong Hit | Move the Target up to 2 + Distance meters. |

## 10. Hurl Interactions

| Interaction | Base Cost | Function |
|---|---:|---|
| Explosive | 2 AP | On impact, deals Potency damage in a 2x2 Area. |
| Mark | 2 AP | Applies Marked on a Strong Hit. Marked may be consumed by an Ally for +1 die on their next Attack against the Marked target. |
| Ricochet | 3 AP | Move the Target up to [Distance - 1] meters toward its point of origin following the end of its movement, and it does not collide with you. |
| Pin | 4 AP | Target becomes Prone on a Strong Hit. |
| Launch | 3 AP | The Target can be moved vertically along its path. |

## 11. Size

Every Physical Target and Area must specify **Size** as part of its entry. The only exception is **Self**, which always refers to the user regardless of Size.

| Size | Name | Approximate Space Occupied |
|---:|---|---|
| 0 | Small | 50 × 50 cm or smaller |
| 1 | Medium | 1 × 1 m cube or smaller |
| 2 | Large | 2 × 2 m space |
| 3 | Huge | 3 × 3 m space |
| 4+ | — | +1 x +1 m space |

## 12. Collision Damage

Physical Targets do not deal or receive direct damage through forced movement. Instead, they deal/receive damage only through Collision, Falling, or while moving through hazardous terrain. The Creature, Object, or Terrain the Target collides with is referred to as the Obstacle. Both the Target and the Obstacle receive damage from the impact, though typically the Obstacle receives full damage, while the Target receives 1/2 damage.

Collision Damage = Distance travelled (meters travelled before impact) + Size

| Hurled Target | Size | Meters Travelled | Collision Damage |
|---|---:|---:|---:|
| Small Object | 1 | 4 m | 5 damage |
| Medium Creature | 2 | 3 m | 5 damage |
| Size 0 Object | 0 | 4 m | 4 damage |
| Large Object | 3 | 5 m | 8 damage |

## 13. Filters

Filters are another kind of Alteration that prevent creatures with the 'Hostile' or 'Allied' tags from receiving direct damage from an Ability. It also prevents Targets with the appropriate tag from being targetted by that ability. Filters do not protect from indirect damage from an ability or its lingering effects.

For example:

> `Hurl: Medium Creature` with `Exclude Allies` cannot directly target or harm an allied Medium Creature, but an ally can still be harmed indirectly if a hostile creature is hurled into them. However, they would not be harmed by Area damage from the Ability.

| Filter | Cost | Effect |
|---|---:|---|
| Exclude Allies | 2 AP | Allied creatures cannot be chosen as direct targets. |
| Exclude Hostiles | 2 AP | Hostile creatures cannot be chosen as direct targets. |
| Exclude Self | 2 AP | The user cannot receive direct damage from the Ability. |

## 14. Safeguard

Safeguard protects against indirect damage caused by an Ability and its lingering effects. It does not protect from direct damage caused by an Ability, such as an Area attack.

> `Hurl: Medium Creature` with `Safeguard Allies` can directly target an allied Medium Creature and harm them through Area damage, as well as any hazards they travel through along their path. However, they would be immune to direct damage caused by collision with another Creature or Obstacle.

| Upgrade | Cost | Function |
|---|---:|---|
| Safeguard Allies | 4 AP | Allied creatures are protected from indirect damage caused during this Ability's resolution. |
| Safeguard Self | 4 AP | The user is protected from indirect damage caused during this Ability's resolution. |

## 15. Glossary

| Term | Definition |
|---|---|
| Ability Points | Ability creation and upgrade points spent across all Abilities. |
| Ability | A built power consisting of a Action plus optional Potency, Alterations, Interactions, Filters, or Safeguards. |
| Action | The verb of an Ability; determines what the Ability does. |
| Target | The thing acted upon. |
| Potency Die | The die rolled for variable damage or effects. |
| Potency Value | Fixed scaling value equal to the number of Potency steps above d4. |
| Alteration | General numerical upgrade to an existing parameter. |
| Interaction | Action-specific functional upgrade that adds new tactical behaviour. |
| Filter | Upgrade that restricts direct target legality based on relationship state. |
| Safeguard | Upgrade that protects from indirect damage caused by the Ability's immediate consequences. |
| Physical Target | A creature or object located within the game world. Size must be specified except for Self. |
| Elemental Target | Abstract force, energy, or substance. Uses Potency damage/effect instead of Collision. |
| Size | Space occupied by a Physical Target or Area scale. |
| Range | Distance from the user to the initial Target. |
| Distance | How far the Ability moves, projects, or displaces a Target/effect. |
| Area | Space affected by an effect. |
| Collision Damage | Damage from forceful impact, equal to meters actually travelled before impact + Size. |
