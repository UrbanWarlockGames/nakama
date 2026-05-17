## Damage Types
Damage is typically split into **Physical Damage** (Crushing, Slashing, Piercing, Ballistic, Incapacitating) and **Elemental Damage** (all other damage types).

### Physical
- Crushing (blunt force trauma)
- Slashing (cutting, slicing)
- Piercing (stabbing, impaling)
- Ballistic (bullets, explosive force)
- Incapacitating (non-lethal damage [NL]; not deadly; deals stamina instead of health damage and [Fitness + Endure] resist vs Knockout at 0. Every hit after 0 stam deals 1 damage only, negative Stamina subtracts from your dice pool)

### Primordial
- Fire (burns; can melt ice on hit, removing the Frozen critical effect, turn Cold to Wet, remove Wet; critical effect: Ignite 1 flames damage/t)
- Frost (frostbite, cold; can freeze target if Wet or slow (Cold) on critical, turns water into ice (1m²/rank)
- Electricity (muscle/nerve damage, electrical burns; deals 5 damage to Wet targets, non-Wet targets receive 1 electricity damage)
- Acid (corrosion; deal creature damage to equipment factoring equipment's material resistances)
- Poison (acutely toxic, poison which causes internal damage or necrosis)
- Sonic (high-frequency vibration and sound waves, may damage/interrupt hearing-based actions)
- Wet (water damage; creatures are immune to damage from being Wet by default but some creatures have weakness to Wet)

### Magical
- Arcane (raw magical energy; unresistible)
- Psychic (mental or non-visible damage, cringe; always targets morale pool before health pool) [req: Brain]

### Special
These damage types are typically reserved for secondary effects or reserved for background characters. You must ask your GM before selecting one as an Elemental Damage type or Elemental Tag.
- Holy (pure positive energy; heals Holy, damages Vile, altruism and Luck)
- Vile (pure negative energy; heals Vile, damages Holy, corruption and Despair)
- Aberrant (otherworldly, eldritch, changing; Targets Morale pool before Health pool, instead of Stamina)
- Spirit (damages the soul, true damage) [req: Living]
- Death (entropy; decay, time, ageing; 1% instant death on Strong Hit) [req: Biological]
- Bleed (bleeding, haemorrhaging; triggers Blood effects on first instance) [requires: Blood]
- Pressure (compression) [req: Organs]
- Suffocation (oxygen deprivation) [req: Breathing]

## Damage Conditions
Most damage types have a Vulnerability condition which is triggered when a Strong Hit is struck on a target, or a Hit+ on a target with Vulnerability to that damage type. Damage Conditions stack. Reducing a Condition decreases its Value by 1. When a Condition with a Value of 1 is Reduced, it is removed unless stated otherwise. Nullifying a Condition removes all stages or ranks of it entirely, regardless of its value.

### Physical

#### Crushing
- Vulnerability Condition: Broken Bones (Limbs become broken on Strong Hit hit leaving one of your choice unusable. Alternatively, a Head or Torso hit leaves the Target Stunned until Aided)
- Reduced by: Aid
- Nullified by: Restoration

#### Slashing
- Vulnerability Condition: Bleeding (1 Bleed damage each turn)
- Amplified by: Bleeding, Impaled
- Reduced by: Heal (Weak Hit)
- Nullified by: Fire, Heal (Hit+)

#### Piercing
- Vulnerability Condition: Impaled (+2 damage ongoing)
- Amplified by: Impaled
- Nullified by: Restoration

#### Ballistic
- Vulnerability Condition: Blown Apart (+1 damage or Armour Break)
- Amplified by: Blown Apart
- Nullified by: Restoration

#### Incapacitating
- Vulnerability Condition: Unconscious
- Nullified by: Conscious, Dead

### Primordial

#### Fire
- Gain Vulnerability to Fire damage
- Vulnerability Condition: Ignite (1 Fire damage each turn until extinguished [minor action])
- Amplified by: **Flammable** (+1 persistent Fire damage each turn until extinguished), Fiery terrain
- Nullified by: Wet

#### Frost
- Gain Vulnerability to Fire, Frost, Ballistic, and Sonic damage
- Vulnerability Condition: Frozen (Paralysed [cannot take physical actions], **Suffocating**, Vulnerability to Cold, Ballistic, Sonic, and Crushing damage, Resistance to Fire damage, Immune to else), gain Armour and Fire resistance equal to ability rank
- Vulnerability Condition (Move): Prone (when moving on Frozen hex)
- Amplified by: Freezing, Frost terrain, Wet (gains Armour = Wet value x 2)
- Area Nullified by: Fire
- Condition Nullified by: Crushing, Fire (resisted)

#### Electricity
- Vulnerability Condition: Charged (1 Electricity damage to touching same source of water)
- Amplified by: Charged = no higher than Wet value, Charged terrain
- Nullified by: leaving affected hexes

#### Acid
- Vulnerability Condition: Chance to become Corroded (-1 Defence, 1 Acid damage and-1 Defence, increases by 1 at the start of each turn until washed away) damage to equipment equal to health damage using material durability + size
- Amplified by: Corroded, Acid terrain
- Nullified by: Wet

#### Poison
- Vulnerability Condition: Poisoned (1 Poison damage each turn until Restored,-1 to all attribute checks)
- Amplified by: Poisoned
- Nullified by: Restoration

#### Wet
- Gain Immunity: **Flammable**
- Gain Resistance: Fire damage
- Gain Vulnerability: Electricity and Frost damage
- Vulnerability Condition: Wet; applies Prone when movement on Wet terrain
- Amplified by: Wet, Wet terrain
- Nullified by: Freezing (Wet area on floor becomes Frozen), Fire (Wet area is removed)

### Magical

#### Psychic
- Vulnerability Condition: Brain Drain (cannot use Abilities for rank duration,-2 equal to rank on all Knowledge and Will-based tasks, if **III: cannot take any actions with the Knowledge trait)
- Amplified by: Brain Drain
- Reduced by: Aid (Leadership)
- Nullified by: Brainless

### Special

#### Holy
- Vulnerability Condition: Holy Fire (you cannot receive the effects of healing)
- Nullified by: Restoration

#### Vile
- Vulnerability Condition: Corrupted (you cannot receive the effects of healing)
- Nullified by: Restoration

#### Aberrant
- Vulnerability Condition: Frightened (-1 to all Combat Reactions and make a Morale check at the end of your turn)
- Amplified by: Frightened

#### Spirit
- Vulnerability Condition: Siphoned (-1 to all Power rolls)
- Amplified by: Siphoned

#### Death
- Vulnerability Condition: Doomed (make a Hit+ death save if Doomed > Level, take direct Health damage equal to Condition Value on a failure)

## Elemental Tags

Basic Attacks with the corresponding Elemental Tag deal the associated damage type and apply any Vulnerability Conditions on a Strong Hit to Targets with the associated Vulnerability. Any Entities (Creatures, Objects, or Terrain) with the Elemental Tag is immune to the corresponding Vulnerability Condition, but gains Vulnerability to any associated Weakening or Nullifying Effects. For example, a Creature with the Wet trait always counts as being Wet, and any attacks apply the Wet condition.
- Ash: **Suffocating** and **Fire** damage + **Ignite** on Strong Hit
- Earth: **Crushing** damage. Effects with the Fire tag count as one Tier lower against you.
- Gravity: **Crushing** and **Pressure** damage. On Hit+ you may Shift the Target SV/PV meters (Might Resist) and Prone on a Strong Hit.
- Metal: **Piercing** or **Electric** damage. Size considered +2 for Weight (swimming, grappling). Wet Vulnerability.
- Oil: **Poison** damage. Applies **Flammable** condition on Hit+
- Smoke: **Suffocation damage**. Hexes you enter become **Smokey** for a number of rounds equal to your Target Strike Value/Potency Value. If all hexes in an enclosed space become **Smokey**, the duration becomes Permanent until a 1x1 meter opening is made in the room, after which the duration returns to normal. All creatures within Smokey terrain are Concealed unless they have smokesight or non-sight or smell precise senses. Smokey terrain makes creatures Hidden instead of Concealed to characters with infravision.
- Vapour: **Wet** and **Suffocating** damage. Makes Creatures and Objects in Area Wet but not Terrain or Self
- Water: **Wet** damage. Applies Wet to Self and Area
- Wood: **Incapacitating** or **Poison** damage. You are Flammable.

### Slime
- Terrain: **Slowing**; half Move after entering space
- Creature: DR 1 (Physical) or **Sticky** + Boneless (count as Size 0 for squeezing into spaces) or Organless (immune to pressure/fall and bleed damage) or Brainless (cannot take Knowledge actions, immune to Brain Drain and Psychic damage)
- Object: **Sticky**; Might Resist to Disengage or Escape
