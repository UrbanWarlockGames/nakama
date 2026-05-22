## Damage Types
Damage is typically split into **Physical Damage** (Crushing, Slashing, Piercing, Ballistic, Incapacitating) and **Elemental Damage** (all other damage types).

### Physical
- Crushing (blunt force trauma)
- Slashing (cutting, slicing)
- Piercing (stabbing, impaling)
- Ballistic (bullets, explosive force)
- Incapacitating (non-lethal damage [NL]; not deadly; deals Strain (Stamina damage) instead of Harm (Health damage) and Unconscious at 0 on a Strong Hit. Every hit after 0 Stamina deals 1 damage only, negative Stamina subtracts from your dice pool)

### Primordial
- Fire (burns; can melt ice on hit, removing the Frozen critical effect, turn Cold to Wet, remove Wet; critical effect: Ignite 1 flames damage/turn)
- Frost (frostbite, cold; can Freeze (Strong Hit) Target if Wet or Slow (Hit), turns water into ice (Slippery terrain))
- Electric (muscle/nerve damage, electrical burns)
- Acid (corrosion; deal creature damage to equipment factoring equipment's material resistances)
- Poison (acutely toxic, poison which causes internal damage or necrosis)
- Sonic (high-frequency vibration and sound waves, may damage/interrupt hearing-based actions)
- Wet (water damage; creatures are immune to damage from being Wet by default but some creatures have weakness to Wet)

### Magical
- Arcane (raw magical energy; unresistible)
- Psychic (mental or non-visible damage, cringe; always Targets morale pool before health pool) [req: Brain]

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
Most damage types have a Vulnerability condition which is triggered when a Hit+ is struck on a Target, or a Hit+ on a Target with Vulnerability to that damage type. Damage Conditions stack. Reducing a Condition decreases its Value by 1. When a Condition with a Value of 1 is Reduced, it is removed unless stated otherwise. Nullifying a Condition removes all stages or ranks of it entirely, regardless of its value.

Terrain with the Condition, such as Wet Terrain or Charged Terrain, apply the Vulnerability Condition to Entites with the corresponding Vulnerability that enter the Terrain and at the end of each of their turns they end inside the terrain thereafter. Persistent Damage is always applied at the end of one's turn giving opportunity to remove it before taking damage again.

Amplifying the Condition means its Condition Value increases by +1. Likewise, Reducing the Condition Value means it is decreased by -1. Nullifying a Condition means you immediately lose it after a successful action, after taking the corresponding Damage Type, or other Trigger.

### Vulnerability Conditions
Where X = Condition Value (CV).

- Vulnerability Condition: Condition X
- Effect: What X does
- Applied by: Strong Hit, or Hit+ against Vulnerable Targets
- Amplified by: What increases X
- Reduced by: What decreases X by 1
- Nullified by: What removes X entirely
- Area Condition: Condition when applied to Terrain

### Physical

#### Crushing
- Vulnerability Condition: Broken Bones (Choose: Limbs or Body. Limbs: become broken leaving one Hand or Appendage of your choice unusable. Body: Target is Stunned until the end of their next turn or until Helped)
- Reduced by: Heal (Hit+)
- Nullified by: Restoration

#### Slashing
- Vulnerability Condition: Bleeding X
- Effect: X Persistent Bleed damage
- Amplified by: Bleeding, Impaled
- Reduced by: Heal (Weak Hit+)
- Nullified by: Fire damage, Heal (Hit+)

#### Piercing
- Vulnerability Condition: Impaled X
- Effect: X Persistent Piercing damage
- Amplified by: Impaled
- Nullified by: Restoration

#### Ballistic
- Vulnerability Condition: Armour Break or Blown Apart (no Armour remaining) (Strong Hit)
- Effect: Armour Break: damage to Armour is doubled. If no Armour remains, the Target gains Blown Apart instead: the Target takes +1 damage from the first damage instance received each turn.
- Amplified by: Blown Apart
- Nullified by: Restoration

#### Incapacitating
- Vulnerability Condition: Unconscious

### Primordial

#### Fire
- Vulnerability Condition: Ignite X
- Effect: X Persistent Fire damage
- Initial Value: Flammable x 2
- Nullified by: Wet, extinguished using the Interact action or Fall Prone

#### Frost
- Vulnerability Condition: Frozen X (Strong Hit)
- Effect: Paralysed, Suffocating, Armour X, Fire Resistance X, Vulnerability X to Frost, Ballistic, Sonic, and Crushing, Immunity to all other damage types
- Initial Value: Wet x 2
- Reduced by: successful [Might] or [Fitness] + [Bash]
- Nullified by: Crushing or Fire damage on a Strong Hit
- Area Condition: Slippery
- Area Effect: must make [Agility] or [Fitness] + [Acrobatics] vs. **Prone** when moving through Slippery Terrain
- Area Nullified by: Fire damage (becomes Wet)

#### Electric
- Vulnerability Condition: Charged X
- Effect: X persistent Electric damage to any Wet Targets and all touching same Wet Area
- Amplified by: Charged
- Nullified by: leaving affected hexes

#### Acid
- Vulnerability Condition: Corroded X
- Effect: -X Block; persistent Acid damage equal to X; X increases by 1 at the start of each turn. Double damage to Objects without Immunity.
- Amplified by: Corroded, start of Target's turn
- Nullified by: Wet

#### Poison
- Vulnerability Condition: Poisoned X
- Effect: X Persistent Poison damage each turn until Restored, -X to all Body Attribute rolls
- Amplified by: Poisoned
- Nullified by: Restoration

#### Wet
- Gain Condition: Wet X
- Gain Immunity: **Flammable**
- Gain Resistance: Fire damage
- Gain Vulnerability: Electric and Frost damage
- Amplified by: Wet
- Nullified by: Frost (Wet becomes Frozen), Fire (Wet is Nullified)

### Magical

#### Psychic
- Vulnerability Condition: Brain Drain X
- Effect: Cannot use Smarts or Willpower Abilities for X rounds; -2X to Smarts and Willpower-based rolls; at Brain Drain 3, cannot take Smarts actions
- Amplified by: Brain Drain
- Reduced by: Aid (Leadership), end of Target's turn
- Nullified by: Brainless

### Special

#### Holy
- Vulnerability Condition: Holy Fire
- Effect: You cannot receive the effects of healing
- Nullified by: Restoration, Corrupted

#### Vile
- Vulnerability Condition: Corrupted
- Effect: You cannot receive the effects of healing
- Nullified by: Restoration, Holy Fire

#### Aberrant
- Vulnerability Condition: Frightened X
- Effect: -X to all Combat Reactions and make a Morale check at the end of your turn
- Amplified by: Frightened
- Reduced by: Aid (Leadership)

#### Spirit
- Vulnerability Condition: Siphoned X
- Effect: -X to all Power rolls
- Amplified by: Siphoned

#### Death
- Vulnerability Condition: Doomed X
- Effect: If Doomed X > Level, take direct Health damage equal to X. Otherwise, roll a d100. On a 100, the Entity instantly dies.
- Nullified by: Unliving

## Elemental Tags

Basic Attacks with the corresponding Elemental Tag deal the associated damage type and apply any Vulnerability Conditions on a Strong Hit to Targets with the associated Vulnerability. Any Entities (Creatures, Objects, or Terrain) with the Elemental Tag is immune to the corresponding Vulnerability Condition, but gains Vulnerability to any associated Weakening or Nullifying Effects. For example, a Creature with the Wet trait always counts as being Wet, and any attacks apply the Wet condition.
- Ash: **Suffocating** and **Fire** damage + **Ignite** on Strong Hit
- Earth: **Crushing** damage. Effects with the Fire tag count as one Tier lower against you.
- Gravity: **Crushing** and **Pressure** damage. On Hit+ you may Shift the Target SV/PV meters (Might Resist) and Prone on a Strong Hit.
- Metal: **Piercing** or **Electric** damage. Size considered +2 for Weight (swimming, grappling). Wet Vulnerability.
- Oil: **Poison** damage. Applies **Flammable** condition on Hit+
- Smoke: **Suffocation** damage. Hexes you enter become **Smokey** for a number of rounds equal to your Target Strike Value/Potency Value. If all hexes in an enclosed space become **Smokey**, the duration becomes Permanent until a 1x1 meter opening is made in the room, after which the duration returns to normal. All creatures within Smokey terrain are Concealed unless they have smokesight or non-sight or smell precise senses. Smokey terrain makes creatures Hidden instead of Concealed to characters with infravision.
- Vapour: **Wet** and **Suffocating** damage. Makes Creatures and Objects in Area Wet but not Terrain or Self
- Water: **Wet** damage. Applies Wet to Self and Area
- Wood: **Incapacitating** or **Poison** damage. You are Flammable.

### Slime
- Terrain: **Slowing**; half Move after entering space
- Creature: DR 1 (Physical) or **Sticky** + Boneless (count as Size 0 for squeezing into spaces) or Organless (immune to pressure/fall and bleed damage) or Brainless (cannot take Smarts actions, immune to Brain Drain and Psychic damage)
- Object: **Sticky**; Might Resist to Disengage or Escape
