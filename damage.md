## Damage Types

### Physical
- Crushing (blunt force trauma)
- Slashing (cutting, slicing)
- Piercing (stabbing, impaling)
- Ballistic (bullets, force such as an explosion)
- Incapacitating (non-lethal damage [NL]; not deadly; deals stamina instead of health damage and might/will save vs knockout at 0. every hit after 0 stam deals 1 damage)

### Elemental
- Fire (burns; can melt ice on hit, removing the Frozen critical effect, turn Cold to Wet, remove Wet; critical effect: Ignite 1 flames damage/t)
- Frost (frostbite, cold; can freeze target if Wet or slow (Cold) on critical, turns water into ice (1m²/rank)
- Electricity (muscle/nerve damage, electrical burns; deals 5 damage to Wet targets, non-Wet targets receive 1 electricity damage)
- Acid (corrosion; deal creature damage to equipment factoring equipment's material resistances)

### Demi-elemental
- Wet (creatures are immune to damage from being wet by default but some creatures have weakness to Wet)
- Sonic (high-frequency vibration and sound waves, may damage/interrupt hearing-based actions)
- Poison (acutely toxic, poison which causes internal damage or necrosis)
- Toxic (biological hazards, long-lasting harm, disease, radiation, chronic health hazards)
- True (hits vulnerable area; cannot be resisted) [req: not immune to critical damage]

### Biological
- Bleed (bleeding, haemorrhaging; triggers Blood effects on first instance) [requires: Blood]
- Death (entropy; decay, time, ageing; 1% instant death on Strong Hit) [req: Biological]
- Exposure [req Flesh, Living, or Mechanical]
- Hunger (food/water deprivation) [req: Needs to Eat or Drink]
- Heat (heat, magma, melting)
- Pressure (compression) [req: Organs]
- Suffocation (oxygen deprivation) [req: Breathing]

### Magical
- Arcane (raw magical energy; unresistible)
- Psychic (mental or non-visible damage, cringe; always targets morale pool before health pool) [req: Brain]

### Metaphysical
- Aberrant (otherworldly, eldritch, changing; Targets Morale pool before Health pool, instead of Stamina)
- Spirit (damages the soul) [req: Living]
- Holy (pure positive energy; heals Holy, damages Vile, altruism and Luck)
- Vile (pure negative energy; heals Vile, damages Holy, corruption and Despair)

## Damage Conditions
Most damage types have a Vulnerability condition which is triggered when a Strong Hit is struck on a target with Vulnerability to that damage type.

### Physical

#### Crushing
- Vulnerability Condition: Broken Bones (Limbs become broken on Strong Hit hit leaving them unusable. Head or Torso hit leaves the Target Stunned until Helped)
- Nullified by: Restoration

#### Slashing
- Vulnerability Condition: Bleeding (1 Slashing damage each turn)
- Amplified by: Bleeding, Impaled
- Reduced by: Heal (Weak Hit)
- Nullified by: Fire, Heal (Hit+)

#### Piercing
- Vulnerability Condition: Impaled (+2 damage ongoing)
- Amplified by: Impaled
- Nullified by: Restoration

#### Ballistic
- Vulnerability Condition: Blown Apart (+d6 damage on Strong Hit)
- Amplified by: Blown Apart
- Nullified by: Greater Restoration

#### Incapacitating
- Vulnerability Condition: Unconscious
- Nullified by: Conscious, Dead

### Elemental

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

### Demi-elemental

#### Wet
- Gain Immunity: **Flammable**
- Gain Resistance: Fire damage
- Gain Vulnerability: Electricity and Frost damage
- Vulnerability Condition: Wet; applies Prone when movement on Wet terrain
- Amplified by: Wet, Wet terrain
- Nullified by: Freezing (Wet area on floor becomes Frozen), Fire (Wet area is removed)

#### Poison
- Vulnerability Condition: Poisoned (1 Poison damage each turn until Restored,-1 to all attribute checks)
- Amplified by: Poisoned
- Nullified by: Restoration

#### Toxic
- Vulnerability Condition: Clock 6, Blighted: Receive Toxic damage every 10 minutes in Narrative Mode equal to Blighted rank
- Amplified by: Blighted
- Reduced by: Heal action (minimum successes = Blighted rank) 
- Nullified by: Greater Restoration

#### Psychic
- Vulnerability Condition: Brain Drain (cannot use Abilities for rank duration,-2 equal to rank on all Knowledge and Will-based tasks, if **III: cannot take any actions with the Knowledge trait)
- Amplified by: Brain Drain
- Reduced by: Aid (Leadership)
- Nullified by: Brainless

### Metaphysical

#### Holy
- Vulnerability Condition: Holy Fire (you cannot receive the effects of healing)
- Nullified by: Greater Restoration

#### Vile
- Vulnerability Condition: Corrupted (you cannot receive the effects of healing)
- Nullified by: Greater Restoration

#### Aberrant
- Vulnerability Condition: Frightened (make a Morale check at the end of your turn, Frightened decreases by 1 after the Morale check)
- Amplified by: Frightened

#### Death
- Vulnerability Condition: Doomed (make a death save if Doomed ** HD)

## Elemental Tags

Basic Attacks with the corresponding Elemental Tag deal the associated damage type and apply any Vulnerability Conditions on a Strong Hit to Targets with the associated Vulnerability. Any Entities (Creatures, Objects, or Terrain) with the Elemental Tag is immune to the corresponding Vulnerability Condition, but gains Vulnerability to any associated Weakening or Nullifying Effects. For example, a Creature with the Wet trait always counts as being Wet, and any attacks apply the Wet condition.
- Ash; **Suffocating** damage + Ignite **Flammable** on Strong Hit
- Dust; **Suffocating** damage
- Earth; **Crushing** damage. Fire Effects count as one Tier lower against you.
- Metal; Size considered + 2 for Weight (swimming, grappling)
- Oil; applies **Flammable**
- Smoke; **Suffocation damage**. Hexes you enter become **Smokey** for a number of rounds equal to your Target Strike Value/Potency Value. If all hexes in an enclosed space become **Smokey**, the duration becomes Permanent until a 1x1 meter opening is made in the room, after which the duration returns to normal. All creatures within Smokey terrain are Concealed unless they have smokesight or non-sight or smell precise senses. Smokey terrain makes creatures Hidden instead of Concealed to characters with infravision.
- Vapour; **Typeless** damage. Makes Creatures and Objects in Area Wet but not Terrain or Self
- Void (gravity); **Crushing** and **Pressure** damage. On Hit+ you may Shift the Target Strike Value/Potency Value meters (Might Resist); Prone on a Strong Hit
- Water; **Typeless** damage. Applies Wet to Self and Area
- Wood; **Incapacitating** damage.

### Slime
- Terrain: **Slowing**; half Move after entering space
- Creature: DR 1 (Physical) or **Sticky** + Boneless (count as Size 0 for squeezing into spaces) or Organless or Brainless (cannot take Knowledge actions, immune to Brain Drain and Psychic damage)
- Object: **Sticky**; Might Resist to Disengage or Escape
