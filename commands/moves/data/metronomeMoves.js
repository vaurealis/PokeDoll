module.exports = [
	{
		name: "Pound",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Karate Chop",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Double Slap",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Comet Punch",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mega Punch",
		effect: "Inflicts regular damage.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Pay Day",
		effect:
			"Inflicts regular damage.  After the battle ends, the winner receives five times the user’s level in extra money for each time this move was used.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fire Punch",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Ice Punch",
		effect: "Inflicts regular damage.  Has a chance to freeze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was frozen solid!",
	},
	{
		name: "Thunder Punch",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Scratch",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Vice Grip",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Guillotine",
		effect:
			"Inflicts damage equal to the target’s max HP.  Ignores accuracy and evasion modifiers.  This move’s accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.\n\nBecause this move inflicts a specific and finite amount of damage, Endure still prevents the target from fainting.\n\nThe effects of Lock-On, Mind Reader, and No Guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through Detect or Protect.",
		accuracy: 30,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Razor Wind",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.  User charges for one turn before attacking.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Swords Dance",
		effect: "Raises the user’s Attack by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Cut",
		effect: "Inflicts regular damage.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gust",
		effect:
			"Inflicts regular damage.\n\nIf the target is under the effect of Bounce, Fly, or Sky Drop, this move will hit with double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wing Attack",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Whirlwind",
		effect:
			"Switches the target out for another of its trainer’s Pokémon selected at random.  Wild battles end immediately.\n\nDoesn’t affect Pokémon with Suction Cups or under the effect of Ingrain.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fly",
		effect:
			"Inflicts regular damage.  User flies high into the air for one turn, becoming immune to attack, and hits on the second turn.\n\nDuring the immune turn, Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, Twister, and Whirlwind still hit the user normally.  Gust and Twister also have double power against the user.\n\nThe damage from Hail and Sandstorm still applies during the immune turn.\n\nThe user may be hit during its immune turn if under the effect of Lock-On, Mind Reader, or No Guard.\n\nThis move cannot be used while Gravity is in effect.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bind",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 85,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Slam",
		effect: "Inflicts regular damage.",
		accuracy: 75,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Vine Whip",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stomp",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.\n\nPower is doubled against Pokémon that have used Minimize since entering the field.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Double Kick",
		effect: "Inflicts regular damage.  Hits twice in one turn.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mega Kick",
		effect: "Inflicts regular damage.",
		accuracy: 75,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Jump Kick",
		effect:
			"Inflicts regular damage. If this move misses, is blocked by Protect or Detect, or has no effect, the user takes damage equal to half of its max HP rounded down.\n\nThis move cannot be used while Gravity is in effect.",
		accuracy: 95,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Rolling Kick",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 85,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Sand Attack",
		effect: "Lowers the target’s accuracy by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Headbutt",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Horn Attack",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fury Attack",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Horn Drill",
		effect:
			"Inflicts damage equal to the target’s max HP.  Ignores accuracy and evasion modifiers.  This move’s accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.\n\nBecause this move inflicts a specific and finite amount of damage, Endure still prevents the target from fainting.\n\nThe effects of Lock-On, Mind Reader, and No Guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through Detect or Protect.",
		accuracy: 30,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tackle",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Body Slam",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Wrap",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 90,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Take Down",
		effect:
			"Inflicts regular damage.  User takes 1/4 the damage it inflicts in recoil.",
		accuracy: 85,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Thrash",
		effect:
			"Inflicts regular damage.  User is forced to attack with this move for 2–3 turns,selected at random.  After the last hit, the user becomes confused.\n\nSafeguard does not protect against the confusion from this move.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Double Edge",
		effect:
			"Inflicts regular damage.  User takes 1/3 the damage it inflicts in recoil.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Tail Whip",
		effect: "Lowers the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Poison Sting",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was poisoned!",
	},
	{
		name: "Twineedle",
		effect:
			"Inflicts regular damage.  Hits twice in the same turn.  Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target was poisoned!",
	},
	{
		name: "Pin Missile",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Leer",
		effect: "Lowers the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Bite",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Growl",
		effect: "Lowers the target’s Attack by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Roar",
		effect:
			"Switches the target out for another of its trainer’s Pokémon selected at random.  Wild battles end immediately.\n\nDoesn’t affect Pokémon with Suction Cups or under the effect of Ingrain.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sing",
		effect: "Puts the target to sleep.",
		accuracy: 55,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Supersonic",
		effect: "Confuses the target.",
		accuracy: 55,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Sonic Boom",
		effect: "Inflicts exactly 20 damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Disable",
		effect:
			"Disables the target’s last used move, preventing its use for 4–7 turns, selected at random, or until the target leaves the field.  If the target hasn’t used a move since entering the field, if it tried to use a move this turn and failed,  if its last used move has 0 PP remaining, or if it already has a move disabled, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Acid",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Ember",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Flamethrower",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Mist",
		effect:
			"Pokémon on the user’s side of the field are immune to stat-lowering effects for five turns.\n\nGuard Swap, Heart Swap, and Power Swap may still be used.\n\nDefog used by an opponent will end this effect.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Water Gun",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hydro Pump",
		effect: "Inflicts regular damage.",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Surf",
		effect:
			"Inflicts regular damage.\n\nIf the target is in the first turn of Dive, this move will hit with double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ice Beam",
		effect: "Inflicts regular damage.  Has a chance to freeze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was frozen solid!",
	},
	{
		name: "Blizzard",
		effect:
			"Inflicts regular damage.  Has a chance to freeze the target.\n\nDuring Hail, this move has 100% accuracy.  It also has a (100 - accuracy)% chance to break through the protection of Protect and Detect.",
		accuracy: 70,
		effectChance: 10,
		narrative: "The target was frozen solid!",
	},
	{
		name: "Psybeam",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target became confused!",
	},
	{
		name: "Bubble Beam",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Aurora Beam",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Attack by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Hyper Beam",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Peck",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Drill Peck",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Submission",
		effect:
			"Inflicts regular damage.  User takes 1/4 the damage it inflicts in recoil.",
		accuracy: 80,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Low Kick",
		effect:
			"Inflicts regular damage.  Power increases with the target’s weight in kilograms, to a maximum of 120.\n\nTarget’s weight | Power\n--------------- | ----:\nUp to 10kg      |    20\nUp to 25kg      |    40\nUp to 50kg      |    60\nUp to 100kg     |    80\nUp to 200kg     |   100\nAbove 200kg     |   120\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Counter",
		effect:
			"Targets the last opposing Pokémon to hit the user with a physical move this turn.  Inflicts twice the damage that move did to the user.  If there is no eligible target, this move will fail.  Type immunity applies, but other type effects are ignored.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Seismic Toss",
		effect:
			"Inflicts damage equal to the user’s level.  Type immunity applies, but other type effects are ignored.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Strength",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Absorb",
		effect:
			"Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Mega Drain",
		effect:
			"Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Leech Seed",
		effect:
			"Plants a seed on the target that drains 1/8 of its max HP at the end of every turn and heals the user for the amount taken.  Has no effect on Grass Pokémon.  The seed remains until the target leaves the field.\n\nThe user takes damage instead of being healed if the target has Liquid Ooze.\n\nRapid Spin will remove this effect.\n\nThis effect is passed on by Baton Pass.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Growth",
		effect:
			"Raises the user’s Attack and Special Attack by one stage each.  During Sunny Day, raises both stats by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Razor Leaf",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Solar Beam",
		effect:
			"Inflicts regular damage.  User charges for one turn before attacking.\n\nDuring Sunny Day, the charge turn is skipped.\n\nDuring Hail, Rain Dance, or Sandstorm, power is halved.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Poison Powder",
		effect: "Poisons the target.",
		accuracy: 75,
		effectChance: null,
		narrative: "The target was poisoned!",
	},
	{
		name: "Stun Spore",
		effect: "Paralyzes the target.",
		accuracy: 75,
		effectChance: null,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Sleep Powder",
		effect: "Puts the target to sleep.",
		accuracy: 75,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Petal Dance",
		effect:
			"Inflicts regular damage.  User is forced to attack with this move for 2–3 turns,selected at random.  After the last hit, the user becomes confused.\n\nSafeguard does not protect against the confusion from this move.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "String Shot",
		effect: "Lowers the target’s Speed by two stages.",
		accuracy: 95,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Dragon Rage",
		effect: "Inflicts exactly 40 damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fire Spin",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 85,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Thunder Shock",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Thunderbolt",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Thunder Wave",
		effect: "Paralyzes the target.",
		accuracy: 90,
		effectChance: null,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Thunder",
		effect:
			"Inflicts regular damage.  Has a chance to paralyze the target.\n\nDuring Rain Dance, this move has 100% accuracy.  It also has a (100 - accuracy)% chance to break through the protection of Protect and Detect.\n\nDuring Sunny Day, this move has 50% accuracy.",
		accuracy: 70,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Rock Throw",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Earthquake",
		effect:
			"Inflicts regular damage.\n\nIf the target is in the first turn of Dig, this move will hit with double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fissure",
		effect:
			"Inflicts damage equal to the target’s max HP.  Ignores accuracy and evasion modifiers.  This move’s accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.\n\nBecause this move inflicts a specific and finite amount of damage, Endure still prevents the target from fainting.\n\nThe effects of Lock-On, Mind Reader, and No Guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through Detect or Protect.",
		accuracy: 30,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dig",
		effect:
			"Inflicts regular damage.  User digs underground for one turn, becoming immune to attack, and hits on the second turn.\n\nDuring the immune turn, Earthquake, Fissure, and Magnitude still hit the user normally, and their power is doubled if appropriate.\n\nThe user may be hit during its immune turn if under the effect of Lock-On, Mind Reader, or No Guard.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Toxic",
		effect:
			"Badly poisons the target.  Never misses when used by a Poison-type Pokémon.",
		accuracy: 90,
		effectChance: null,
		narrative: "The target was poisoned!",
	},
	{
		name: "Confusion",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target became confused!",
	},
	{
		name: "Psychic",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Hypnosis",
		effect: "Puts the target to sleep.",
		accuracy: 60,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Meditate",
		effect: "Raises the user’s Attack by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Agility",
		effect: "Raises the user’s Speed by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Quick Attack",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rage",
		effect:
			"Inflicts regular damage.  Every time the user is hit after it uses this move but before its next action, its Attack raises by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Teleport",
		effect: "Does nothing.  Wild battles end immediately.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Night Shade",
		effect:
			"Inflicts damage equal to the user’s level.  Type immunity applies, but other type effects are ignored.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mimic",
		effect:
			"This move is replaced by the target’s last successfully used move, and its PP changes to 5.  If the target hasn’t used a move since entering the field, if it tried to use a move this turn and failed, or if the user already knows the targeted move, this move will fail.  This effect vanishes when the user leaves the field.\n\nIf Chatter, Metronome, Mimic, Sketch, or Struggle is selected, this move will fail.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist or Metronome, nor forced by Encore.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Screech",
		effect: "Lowers the target’s Defense by two stages.",
		accuracy: 85,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Double Team",
		effect: "Raises the user’s evasion by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Recover",
		effect: "Heals the user for half its max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Harden",
		effect: "Raises the user’s Defense by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Minimize",
		effect:
			"Raises the user’s evasion by two stages.\n\nStomp and Steamroller have double power against Pokémon that have used this move since entering the field.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Smokescreen",
		effect: "Lowers the target’s accuracy by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Confuse Ray",
		effect: "Confuses the target.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Withdraw",
		effect: "Raises the user’s Defense by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Defense Curl",
		effect:
			"Raises user’s Defense by one stage.\n\nAfter this move is used, the power of Ice Ball and Rollout are doubled until the user leaves the field.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Barrier",
		effect: "Raises the user’s Defense by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Light Screen",
		effect:
			"Erects a barrier around the user’s side of the field that reduces damage from special attacks by half for five turns.  In double battles, the reduction is 1/3.  Critical hits are not affected by the barrier.\n\nIf the user is holding Light Clay, the barrier lasts for eight turns.\n\nBrick Break or Defog used by an opponent will destroy the barrier.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Haze",
		effect:
			"Removes stat, accuracy, and evasion modifiers from every Pokémon on the field.\n\nThis does not count as a stat reduction for the purposes of Clear Body or White Smoke.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Reflect",
		effect:
			"Erects a barrier around the user’s side of the field that reduces damage from physical attacks by half for five turns.  In double battles, the reduction is 1/3.  Critical hits are not affected by the barrier.\n\nIf the user is holding Light Clay, the barrier lasts for eight turns.\n\nBrick Break or Defog used by an opponent will destroy the barrier.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Focus Energy",
		effect:
			"User’s critical hit rate is two levels higher until it leaves the field.  If the user has already used Focus Energy since entering the field, this move will fail.\n\nThis effect is passed on by Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bide",
		effect:
			"User waits for two turns.  On the second turn, the user inflicts twice the damage it accumulated on the last Pokémon to hit it.  Damage inflicted is typeless.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Metronome",
		effect:
			"Selects any move at random and uses it.  Moves the user already knows are not eligible.  Assist, meta, protection, and reflection moves are also not eligible; specifically, Assist, Chatter, Copycat, Counter, Covet, Destiny Bond, Detect, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Protect, Quick Guard, Sketch, Sleep Talk, Snatch, Struggle, Switcheroo, Thief, Trick, and Wide Guard will not be selected by this move.\n\nThis move cannot be copied by Mimic or Mirror Move, nor selected by Assist, Metronome, or Sleep Talk.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mirror Move",
		effect:
			"Uses the last move targeted at the user by a Pokémon still on the field.  A move counts as targeting the user even if it hit multiple Pokémon, as long as the user was one of them; however, moves targeting the field itself do not count.  If the user has not been targeted by an appropriate move since entering the field, or if no Pokémon that targeted the user remains on the field, this move will fail.\n\nMoves that failed, missed, had no effect, or were blocked are still copied.\n\nAssist moves, time-delayed moves, “meta” moves that operate on other moves/Pokémon/abilities, and some other special moves cannot be copied and are ignored; if the last move to hit the user was such a move, the previous move will be used instead.  The full list of ignored moves is: Acid Armor, Acupressure, After You, Agility, Ally Switch, Amnesia, Aqua Ring, Aromatherapy, Aromatic Mist, Assist, Autotomize, Barrier, Baton Pass, Belch, Belly Drum, Bide, Bulk Up, Calm Mind, Camouflage, Celebrate, Charge, Coil, Conversion, Conversion 2, Copycat, Cosmic Power, Cotton Guard, Counter, Crafty Shield, Curse, Defend Order, Defense Curl, Destiny Bond, Detect, Doom Desire, Double Team, Dragon Dance, Electric Terrain, Endure, Final Gambit, Flower Shield, Focus Energy, Focus Punch, Follow Me, Future Sight, Geomancy, Grassy Terrain, Gravity, Growth, Grudge, Guard Split, Hail, Happy Hour, Harden, Haze, Heal Bell, Heal Order, Heal Pulse, Healing Wish, Helping Hand, Hold Hands, Hone Claws, Howl, Imprison, Ingrain, Ion Deluge, Iron Defense, King’s Shield, Light Screen, Lucky Chant, Lunar Dance, Magic Coat, Magnet Rise, Magnetic Flux, Mat Block, Me First, Meditate, Metronome, Milk Drink, Mimic, Minimize, Mirror Coat, Mirror Move, Mist, Misty Terrain, Moonlight, Morning Sun, Mud Sport, Nasty Plot, Nature Power, Perish Song, Power Split, Power Trick, Protect, Psych Up, Quick Guard, Quiver Dance, Rage Powder, Rain Dance, Recover, Recycle, Reflect, Reflect Type, Refresh, Rest, Rock Polish, Role Play, Roost, Rototiller, Safeguard, Sandstorm, Shadow Blast, Shadow Bolt, Shadow Half, Shadow Rush, Shadow Shed, Shadow Sky, Shadow Storm, Shadow Wave, Sharpen, Shell Smash, Shift Gear, Sketch, Slack Off, Sleep Talk, Snatch, Soft-Boiled, Spikes, Spiky Shield, Spit Up, Splash, Stealth Rock, Sticky Web, Stockpile, Struggle, Substitute, Sunny Day, Swallow, Swords Dance, Synthesis, Tail Glow, Tailwind, Teleport, Toxic Spikes, Transform, Water Sport, Wide Guard, Wish, Withdraw and Work Up.\n\nThis move cannot be selected by Assist, Metronome, or Sleep Talk, nor forced by Encore.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Self Destruct",
		effect:
			"User faints, even if the attack fails or misses.  Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Egg Bomb",
		effect: "Inflicts regular damage.",
		accuracy: 75,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lick",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Smog",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 70,
		effectChance: 40,
		narrative: "The target was poisoned!",
	},
	{
		name: "Sludge",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was poisoned!",
	},
	{
		name: "Bone Club",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 85,
		effectChance: 10,
		narrative: "The target flinched!",
	},
	{
		name: "Fire Blast",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 85,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Waterfall",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target flinched!",
	},
	{
		name: "Clamp",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 85,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Swift",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Skull Bash",
		effect:
			"Inflicts regular damage.  Raises the user’s Defense by one stage.  User then charges for one turn before attacking.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Spike Cannon",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Constrict",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Amnesia",
		effect: "Raises the user’s Special Defense by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Kinesis",
		effect: "Lowers the target’s accuracy by one stage.",
		accuracy: 80,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Soft Boiled",
		effect: "Heals the user for half its max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "High Jump Kick",
		effect:
			"Inflicts regular damage. If this move misses, is blocked by Protect or Detect, or has no effect, the user takes damage equal to half of its max HP rounded down.\n\nThis move cannot be used while Gravity is in effect.",
		accuracy: 90,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Glare",
		effect: "Paralyzes the target.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Dream Eater",
		effect:
			"Fails if not used on a sleeping Pokémon.  Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Poison Gas",
		effect: "Poisons the target.",
		accuracy: 90,
		effectChance: null,
		narrative: "The target was poisoned!",
	},
	{
		name: "Barrage",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Leech Life",
		effect:
			"Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Lovely Kiss",
		effect: "Puts the target to sleep.",
		accuracy: 75,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Sky Attack",
		effect:
			"Inflicts regular damage.  User charges for one turn before attacking.  Critical hit chance is one level higher than normal.  Has a chance to make the target flinch.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 90,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Transform",
		effect:
			"User copies the target’s species, weight, type, ability, calculated stats (except HP), and moves.  Copied moves will all have 5 PP remaining.  IVs are copied for the purposes of Hidden Power, but stats are not recalculated.\n\nChoice Band, Choice Scarf, and Choice Specs stay in effect, and the user must select a new move.\n\nThis move cannot be copied by Mirror Move, nor forced by Encore.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bubble",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Dizzy Punch",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target became confused!",
	},
	{
		name: "Spore",
		effect: "Puts the target to sleep.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Flash",
		effect: "Lowers the target’s accuracy by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Psywave",
		effect:
			"Inflicts typeless damage between 50% and 150% of the user’s level, selected at random in increments of 10%.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Splash",
		effect:
			"Does nothing.\n\nThis move cannot be used while Gravity is in effect.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Acid Armor",
		effect: "Raises the user’s Defense by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Crabhammer",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Explosion",
		effect:
			"User faints, even if the attack fails or misses.  Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fury Swipes",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bonemerang",
		effect: "Inflicts regular damage.  Hits twice in one turn.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rest",
		effect:
			"User falls to sleep and immediately regains all its HP.  If the user has another major status effect, sleep will replace it.  The user will always wake up after two turns, or one turn with Early Bird.\n\nThis move fails if the Pokémon cannot fall asleep due to Uproar, Insomnia, or Vital Spirit.  It also fails if the Pokémon is at full health or is already asleep.",
		accuracy: null,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Rock Slide",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 90,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Hyper Fang",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 90,
		effectChance: 10,
		narrative: "The target flinched!",
	},
	{
		name: "Sharpen",
		effect: "Raises the user’s Attack by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Conversion",
		effect:
			"User’s type changes to the type of one of its moves, selected at random.  Hidden Power and Weather Ball are treated as Normal.  Only moves with a different type are eligible, and Curse is never eligible.  If the user has no suitable moves, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tri Attack",
		effect:
			"Inflicts regular damage.  Has a chance to burn, freeze, or paralyze the target.  One of these effects is selected at random; they do not each have independent chances to occur.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target was burned!",
	},
	{
		name: "Super Fang",
		effect:
			"Inflicts typeless damage equal to half the target’s remaining HP.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Slash",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Substitute",
		effect:
			"Transfers 1/4 the user’s max HP into a doll that absorbs damage and causes most negative move effects to fail.  If the user leaves the field, the doll will vanish.  If the user cannot pay the HP cost, this move will fail.\n\nThe doll takes damage as normal, using the user’s stats and types, and will break when its HP reaches zero.  Self-inflicted damage from confusion or recoil is not absorbed.  Healing effects from opponents ignore the doll and heal the user as normal.  Moves that work based on the user’s HP still do so; the doll’s HP does not influence any move.\n\nThe doll will block major status effects, confusion, and flinching.  The effects of Smelling Salts and Wake-Up Slap do not trigger against a doll, even if the Pokémon behind the doll has the appropriate major status effect.  Multi-turn trapping moves like Wrap will hit the doll for their regular damage, but the multi-turn trapping and damage effects will not activate.\n\nMoves blocked or damage absorbed by the doll do not count as hitting the user or inflicting damage for any effects that respond to such, e.g., Avalanche, Counter, or a Rowap Berry.  Magic Coat still works as normal, even against moves the doll would block.  Opposing Pokémon that damage the doll with a leech move like Absorb are healed as normal.\n\nIt will also block Acupressure, Block, the curse effect of Curse, Dream Eater, Embargo, Flatter, Gastro Acid, Grudge, Heal Block, Leech Seed, Lock-On, Mean Look, Mimic, Mind Reader, Nightmare, Pain Split, Psycho Shift, Spider Web, Sketch, Swagger, Switcheroo, Trick, Worry Seed, and Yawn.  A Pokémon affected by Yawn before summoning the doll will still fall to sleep.\n\nThe doll blocks Intimidate, but all other abilities act as though the doll did not exist.  If the user has an ability that absorbs moves of a certain type for HP (such as Volt Absorb absorbing Thunder Wave), such moves will not be blocked.\n\nLife Orb and berries that cause confusion still work as normal, but their respective HP loss and confusion are absorbed/blocked by the doll.\n\nThe user is still vulnerable to damage inflicted when entering or leaving the field, such as by Pursuit or Spikes; however, the doll will block the poison effect of Toxic Spikes.\n\nThe doll is passed on by Baton Pass.  It keeps its existing HP, but uses the replacement Pokémon’s stats and types for damage calculation.\n\nAll other effects work as normal.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Struggle",
		effect:
			"Inflicts typeless regular damage.  User takes 1/4 its max HP in recoil.  Ignores accuracy and evasion modifiers.\n\nThis move is used automatically when a Pokémon cannot use any other move legally, e.g., due to having no PP remaining or being under the effect of both Encore and Torment at the same time.\n\nThis move’s recoil is not treated as recoil for the purposes of anything that affects recoil, such as the ability Rock Head.  It also is not prevented by Magic Guard.\n\nThis move cannot be copied by Mimic, Mirror Move, or Sketch, nor selected by Assist or Metronome, nor forced by Encore.",
		accuracy: null,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Sketch",
		effect:
			"Permanently replaces itself with the target’s last used move.  If that move is Chatter or Struggle, this move will fail.\n\nThis move cannot be copied by Mimic or Mirror Move, nor selected by Assist or Metronome, nor forced by Encore.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Triple Kick",
		effect:
			"Inflicts regular damage.  Hits three times in the same turn.  The second hit has double power, and the third hit has triple power.  Each hit has a separate accuracy check, and this move stops if a hit misses.\n\nSkill Link does not apply.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Thief",
		effect:
			"Inflicts regular damage.  If the target is holding an item and the user is not, the user will permanently take the item.  Damage is still inflicted if an item cannot be taken.\n\nPokémon with Sticky Hold or Multitype are immune to the item theft effect.\n\nThe target cannot recover its item with Recycle.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spider Web",
		effect:
			"The target cannot switch out normally.  Ignores accuracy and evasion modifiers.  This effect ends when the user leaves the field.\n\nThe target may still escape by using Baton Pass, U-turn, or a Shed Shell.\n\nBoth the user and the target pass on this effect with Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mind Reader",
		effect:
			"If the user targets the same target again before the end of the next turn, the move it uses is guaranteed to hit.  This move itself also ignores accuracy and evasion modifiers.\n\nOne-hit KO moves are also guaranteed to hit, as long as the user is equal or higher level than the target.  This effect also allows the user to hit Pokémon that are off the field due to moves such as Dig or Fly.\n\nIf the target uses Detect or Protect while under the effect of this move, the user is not guaranteed to hit, but has a (100 - accuracy)% chance to break through the protection.\n\nThis effect is passed on by Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Nightmare",
		effect:
			"Only works on sleeping Pokémon.  Gives the target a nightmare, damaging it for 1/4 its max HP every turn.  If the target wakes up or leaves the field, this effect ends.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Flame Wheel",
		effect:
			"Inflicts regular damage.  Has a chance to burn the target.  Frozen Pokémon may use this move, in which case they will thaw.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Snore",
		effect:
			"Only usable if the user is sleeping.  Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target fell asleep!",
	},
	{
		name: "Curse",
		effect:
			"If the user is a Ghost: user pays half its max HP to place a curse on the target, damaging it for 1/4 its max HP every turn.\nOtherwise: Lowers the user’s Speed by one stage, and raises its Attack and Defense by one stage each.\n\nThe curse effect is passed on by Baton Pass.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flail",
		effect:
			"Inflicts regular damage.  Power varies inversely with the user’s proportional remaining HP.\n\n64 * current HP / max HP | Power\n-----------------------: | ----:\n 0– 1                    |  200\n 2– 5                    |  150\n 6–12                    |  100\n13–21                    |   80\n22–42                    |   40\n43–64                    |   20\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Conversion 2",
		effect:
			"Changes the user’s type to a type either resistant or immune to the last damaging move that hit it.  The new type is selected at random and cannot be a type the user already is.  If there is no eligible new type, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aeroblast",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Cotton Spore",
		effect: "Lowers the target’s Speed by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Reversal",
		effect:
			"Inflicts regular damage.  Power varies inversely with the user’s proportional remaining HP.\n\n64 * current HP / max HP | Power\n-----------------------: | ----:\n 0– 1                    |  200\n 2– 5                    |  150\n 6–12                    |  100\n13–21                    |   80\n22–42                    |   40\n43–64                    |   20\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spite",
		effect:
			"Lowers the PP of the target’s last used move by 4.  If the target hasn’t used a move since entering the field, if it tried to use a move this turn and failed, or if its last used move has 0 PP remaining, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Powder Snow",
		effect: "Inflicts regular damage.  Has a chance to freeze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was frozen solid!",
	},
	{
		name: "Protect",
		effect:
			"No moves will hit the user for the remainder of this turn.  If the user is last to act this turn, this move will fail.\n\nIf the user successfully used Detect, Endure, Protect, Quick Guard, or Wide Guard on the last turn, this move has a 50% chance to fail.\n\nLock-On, Mind Reader, and No Guard provide a (100 – accuracy)% chance for moves to break through this move.  This does not apply to one-hit KO moves (Fissure, Guillotine, Horn Drill, and Sheer Cold); those are always blocked by this move.\n\nThunder during Rain Dance and Blizzard during Hail have a 30% chance to break through this move.\n\nThe following effects are not prevented by this move:\n\n* Acupressure from an ally\n* Curse’s curse effect\n* Delayed damage from Doom Desire and Future Sight; however, these moves will be prevented if they are used this turn\n* Feint, which will also end this move’s protection after it hits\n* Imprison\n* Perish Song\n* Shadow Force\n* Moves that merely copy the user, such as Transform or Psych Up\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mach Punch",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Scary Face",
		effect: "Lowers the target’s Speed by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Feint Attack",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sweet Kiss",
		effect: "Confuses the target.",
		accuracy: 75,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Belly Drum",
		effect:
			"User pays half its max HP to raise its Attack to +6 stages.  If the user cannot pay the HP cost, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sludge Bomb",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was poisoned!",
	},
	{
		name: "Mud Slap",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Octazooka",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 85,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Spikes",
		effect:
			"Scatters spikes around the opposing field, which damage opposing Pokémon that enter the field for 1/8 of their max HP.  Pokémon immune to Ground moves are immune to this damage, except during Gravity.  Up to three layers of spikes may be laid down, adding 1/16 to the damage done: two layers of spikes damage for 3/16 max HP, and three layers damage for 1/4 max HP.\n\nWonder Guard does not block damage from this effect.\n\nRapid Spin removes this effect from its user’s side of the field.  Defog removes this effect from its target’s side of the field.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Zap Cannon",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 50,
		effectChance: 100,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Foresight",
		effect:
			"Resets the target’s evasion to normal and prevents any further boosting until the target leaves the field.  A Ghost under this effect takes normal damage from Normal and Fighting moves.  This move itself ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Destiny Bond",
		effect:
			"If the user faints before its next move, the Pokémon that fainted it will automatically faint.  End-of-turn damage is ignored.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Perish Song",
		effect:
			"Every Pokémon is given a counter that starts at 3 and decreases by 1 at the end of every turn, including this one.  When a Pokémon’s counter reaches zero, that Pokémon faints.  A Pokémon that leaves the field will lose its counter; its replacement does not inherit the effect, and other Pokémon’s counters remain.\n\nThis effect is passed on by Baton Pass.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Icy Wind",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 95,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Detect",
		effect:
			"No moves will hit the user for the remainder of this turn.  If the user is last to act this turn, this move will fail.\n\nIf the user successfully used Detect, Endure, Protect, Quick Guard, or Wide Guard on the last turn, this move has a 50% chance to fail.\n\nLock-On, Mind Reader, and No Guard provide a (100 – accuracy)% chance for moves to break through this move.  This does not apply to one-hit KO moves (Fissure, Guillotine, Horn Drill, and Sheer Cold); those are always blocked by this move.\n\nThunder during Rain Dance and Blizzard during Hail have a 30% chance to break through this move.\n\nThe following effects are not prevented by this move:\n\n* Acupressure from an ally\n* Curse’s curse effect\n* Delayed damage from Doom Desire and Future Sight; however, these moves will be prevented if they are used this turn\n* Feint, which will also end this move’s protection after it hits\n* Imprison\n* Perish Song\n* Shadow Force\n* Moves that merely copy the user, such as Transform or Psych Up\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bone Rush",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lock On",
		effect:
			"If the user targets the same target again before the end of the next turn, the move it uses is guaranteed to hit.  This move itself also ignores accuracy and evasion modifiers.\n\nOne-hit KO moves are also guaranteed to hit, as long as the user is equal or higher level than the target.  This effect also allows the user to hit Pokémon that are off the field due to moves such as Dig or Fly.\n\nIf the target uses Detect or Protect while under the effect of this move, the user is not guaranteed to hit, but has a (100 - accuracy)% chance to break through the protection.\n\nThis effect is passed on by Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Outrage",
		effect:
			"Inflicts regular damage.  User is forced to attack with this move for 2–3 turns,selected at random.  After the last hit, the user becomes confused.\n\nSafeguard does not protect against the confusion from this move.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Sandstorm",
		effect:
			"Changes the weather to a sandstorm for five turns.  Pokémon that are not Ground, Rock, or Steel take 1/16 their max HP at the end of every turn.  Every Rock Pokémon’s original Special Defense is raised by 50% for the duration of this effect.\n\nSolar Beam’s power is halved.\n\nMoonlight, Morning Sun, and Synthesis only heal 1/4 the user’s max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Giga Drain",
		effect:
			"Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Endure",
		effect:
			"The user’s HP cannot be lowered below 1 by any means for the remainder of this turn.\n\nIf the user successfully used Detect, Endure, Protect, Quick Guard, or Wide Guard on the last turn, this move has a 50% chance to fail.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Charm",
		effect: "Lowers the target’s Attack by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Rollout",
		effect:
			"Inflicts regular damage.  User is forced to use this move for five turns.  Power doubles every time this move is used in succession to a maximum of 16x, and resets to normal after the lock-in ends.  If this move misses or becomes unusable, the lock-in ends.\n\nIf the user has used Defense Curl since entering the field, this move has double power.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "False Swipe",
		effect:
			"Inflicts regular damage.  Will not reduce the target’s HP below 1.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Swagger",
		effect:
			"Raises the target’s Attack by two stages, then confuses it.  If the target’s Attack cannot be raised by two stages, the confusion is not applied.",
		accuracy: 85,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Milk Drink",
		effect: "Heals the user for half its max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spark",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Fury Cutter",
		effect:
			"Inflicts regular damage.  Power doubles after every time this move is used, whether consecutively or not, maxing out at 16x.  If this move misses or the user leaves the field, power resets.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Steel Wing",
		effect:
			"Inflicts regular damage. Has a chance to raise the user’s Defense one stage.",
		accuracy: 90,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Mean Look",
		effect:
			"The target cannot switch out normally.  Ignores accuracy and evasion modifiers.  This effect ends when the user leaves the field.\n\nThe target may still escape by using Baton Pass, U-turn, or a Shed Shell.\n\nBoth the user and the target pass on this effect with Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Attract",
		effect:
			"Causes the target to fall in love with the user, giving it a 50% chance to do nothing each turn.  If the user and target are the same gender, or either is genderless, this move will fail.  If either Pokémon leaves the field, this effect ends.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sleep Talk",
		effect:
			"Only usable if the user is sleeping.  Randomly selects and uses one of the user’s other three moves.  Use of the selected move requires and costs 0 PP.\n\nThis move will not select Assist, Bide, Bounce, Chatter, Copycat, Dig, Dive, Fly, Focus Punch, Me First, Metronome, Mirror Move, Shadow Force, Skull Bash, Sky Attack, Sky Drop, Sleep Talk, Solar Beam, Razor Wind, or Uproar.\n\nIf the selected move requires a recharge turn—i.e., one of Blast Burn, Frenzy Plant, Giga Impact, Hydro Cannon, Hyper Beam, Roar of Time, or Rock Wrecker—and the user is still sleeping next turn, then it’s forced to use this move again and pay another PP for the recharge turn.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist, Metronome, or Sleep Talk.",
		accuracy: null,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Heal Bell",
		effect:
			"Removes major status effects and confusion from every Pokémon in the user’s party.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Return",
		effect:
			"Inflicts regular damage.  Power increases with happiness, given by `happiness * 2 / 5`, to a maximum of 102.  Power bottoms out at 1.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Present",
		effect:
			"Randomly uses one of the following effects.\n\nEffect                                             | Chance\n-------------------------------------------------- | -----:\nInflicts regular damage with 40 power  |    40%\nInflicts regular damage with 80 power  |    30%\nInflicts regular damage with 120 power |    10%\nHeals the target for 1/4 its max HP    |    20%\n\nOn average, this move inflicts regular damage with 52 power and heals the target for 1/20 its max HP.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Frustration",
		effect:
			"Inflicts regular damage.  Power increases inversely with happiness, given by `(255 - happiness) * 2 / 5`, to a maximum of 102.  Power bottoms out at 1.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Safeguard",
		effect:
			"Protects Pokémon on the user’s side of the field from major status effects and confusion for five turns.  Does not cancel existing ailments.  This effect remains even if the user leaves the field.\n\nIf Yawn is used while this move is in effect, it will immediately fail.\n\nDefog used by an opponent will end this effect.\n\nThis effect does not prevent the confusion caused by Outrage, Petal Dance, or Thrash.",
		accuracy: null,
		effectChance: null,
		narrative: "The user targeted the field!",
	},
	{
		name: "Pain Split",
		effect:
			"Changes the user’s and target’s remaining HP to the average of their current remaining HP.  Ignores accuracy and evasion modifiers.  This effect does not count as inflicting damage for other moves and effects that respond to damage taken.\n\nThis effect fails against a Substitute.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sacred Fire",
		effect:
			"Inflicts regular damage.  Has a chance to burn the target.  Frozen Pokémon may use this move, in which case they will thaw.",
		accuracy: 95,
		effectChance: 50,
		narrative: "The target was burned!",
	},
	{
		name: "Magnitude",
		effect:
			"Inflicts regular damage.  Power is selected at random between 10 and 150, with an average of 71:\n\nMagnitude | Power | Chance\n--------: | ----: | -----:\n        4 |    10 |     5%\n        5 |    30 |    10%\n        6 |    50 |    20%\n        7 |    70 |    30%\n        8 |    90 |    20%\n        9 |   110 |    10%\n       10 |   150 |     5%\n\nThis move has double power against Pokémon currently underground due to Dig.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dynamic Punch",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 50,
		effectChance: 100,
		narrative: "The target became confused!",
	},
	{
		name: "Megahorn",
		effect: "Inflicts regular damage.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dragon Breath",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Baton Pass",
		effect:
			"User switches out, and the trainer selects a replacement Pokémon from the party.  Stat changes, confusion, and persistent move effects are passed along to the replacement Pokémon.\n\nThe following move effects are passed:\n\n* Aqua Ring\n* both the user’s and target’s effect of Block, Mean Look, and Spider Web\n* the curse effect of Curse\n* Embargo\n* Focus Energy or an activated Lansat Berry\n* Gastro Acid\n* Ingrain\n* being sapped by Leech Seed\n* being targeted by Lock-On or Mind Reader\n* Magnet Rise\n* Perish Song’s counter\n* Power Trick\n* Substitute; the doll’s HP is unchanged\n\nThe replacement Pokémon does not trigger effects that respond to Pokémon switching in.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Encore",
		effect:
			"The next 4–8 times (selected at random) the target attempts to move, it is forced to repeat its last used move.  If the selected move allows the trainer to select a target, an opponent will be selected at random each turn.  If the target is prevented from using the selected move by some other effect, Struggle will be used instead.  This effect ends if the selected move runs out of PP.\n\nIf the target hasn’t used a move since entering the field, if it tried to use a move this turn and failed, if it does not know the selected move, or if the selected move has 0 PP remaining, this move will fail.  If the target’s last used move was Encore, Mimic, Mirror Move, Sketch, Struggle, or Transform, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Pursuit",
		effect:
			"Inflicts regular damage.  If the target attempts to switch out this turn before the user acts, this move hits the target before it leaves and has double power.\n\nThis effect can still hit a Pokémon that switches out when it has a Substitute up or when an ally has used Follow Me.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rapid Spin",
		effect:
			"Inflicts regular damage.  Removes Leech Seed from the user, frees the user from Bind, Clamp, Fire Spin, Magma Storm, Sand Tomb, Whirlpool, and Wrap, and clears Spikes, Stealth Rock, and Toxic Spikes from the user’s side of the field.  If this move misses or has no effect, its effect doesn’t activate.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Sweet Scent",
		effect: "Lowers the target’s evasion by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Iron Tail",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 75,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Metal Claw",
		effect:
			"Inflicts regular damage. Has a chance to raise the user’s Attack one stage.",
		accuracy: 95,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Vital Throw",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Morning Sun",
		effect:
			"Heals the user for half its max HP.\n\nDuring Sunny Day, the healing is increased to 2/3 max HP.\n\nDuring Hail, Rain Dance, or Sandstorm, the healing is decreased to 1/4 max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Synthesis",
		effect:
			"Heals the user for half its max HP.\n\nDuring Sunny Day, the healing is increased to 2/3 max HP.\n\nDuring Hail, Rain Dance, or Sandstorm, the healing is decreased to 1/4 max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Moonlight",
		effect:
			"Heals the user for half its max HP.\n\nDuring Sunny Day, the healing is increased to 2/3 max HP.\n\nDuring Hail, Rain Dance, or Sandstorm, the healing is decreased to 1/4 max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hidden Power",
		effect:
			"Inflicts regular damage.  Power and type are determined by the user’s IVs.\n\nPower is given by `x * 40 / 63 + 30`.  `x` is obtained by arranging bit 1 from the IV for each of Special Defense, Special Attack, Speed, Defense, Attack, and HP in that order.  (Bit 1 is 1 if the IV is of the form `4n + 2` or `4n + 3`.  `x` is then 64 * Special Defense IV bit 1, plus 32 * Special Attack IV bit 1, etc.)\n\nPower is always between 30 and 70, inclusive.  Average power is 49.5.\n\nType is given by `y * 15 / 63`, where `y` is similar to `x` above, except constructed from bit 0.  (Bit 0 is 1 if the IV is odd.)  The result is looked up in the following table.\n\nValue | Type\n----: | --------\n    0 | Fighting\n    1 | Flying\n    2 | Poison\n    3 | Ground\n    4 | Rock\n    5 | Bug\n    6 | Ghost\n    7 | Steel\n    8 | Fire\n    9 | Water\n   10 | Grass\n   11 | Electric\n   12 | Psychic\n   13 | Ice\n   14 | Dragon\n   15 | Dark\n\nThis move thus cannot be Normal.  Most other types have an equal 1/16 chance to be selected, given random IVs.  However, due to the flooring used here, Bug, Fighting, and Grass appear 5/64 of the time, and Dark only 1/64 of the time.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Cross Chop",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Twister",
		effect:
			"Inflicts regular damage.  Has a chance to make each target flinch.\n\nIf the target is under the effect of Bounce, Fly, or Sky Drop, this move will hit with double power.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target flinched!",
	},
	{
		name: "Rain Dance",
		effect:
			"Changes the weather to rain for five turns, during which Water moves inflict 50% extra damage, and Fire moves inflict half damage.\n\nIf the user is holding Damp Rock, this effect lasts for eight turns.\n\nThunder has 100% accuracy.  If the target has used Detect or Protect, Thunder has a (100 - accuracy)% chance to break through the protection.\n\nSolar Beam has half power.\n\nMoonlight, Morning Sun, and Synthesis heal only 1/4 of the user’s max HP.\n\nPokémon with Swift Swim have doubled original Speed.\n\nPokémon with Forecast become Water.\n\nPokémon with Dry Skin heal 1/8 max HP, Pokémon with Hydration are cured of major status effects, and Pokémon with Rain Dish heal 1/16 max HP at the end of each turn.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sunny Day",
		effect:
			"Changes the weather to sunshine for five turns, during which Fire moves inflict 50% extra damage, and Water moves inflict half damage.\n\nIf the user is holding Heat Rock, this effect lasts for eight turns.\n\nPokémon cannot become frozen.\n\nThunder has 50% accuracy.\n\nSolar Beam skips its charge turn.\n\nMoonlight, Morning Sun, and Synthesis heal 2/3 of the user’s max HP.\n\nPokémon with Chlorophyll have doubled original Speed.\n\nPokémon with Forecast become Fire.\n\nPokémon with Leaf Guard are not affected by major status effects.\n\nPokémon with Flower Gift change form; every Pokémon on their side of the field have their original Attack and Special Attack increased by 50%.\n\nPokémon with Dry Skin lose 1/8 max HP at the end of each turn.\n\nPokémon with Solar Power have their original Special Attack raised by 50% but lose 1/8 their max HP at the end of each turn.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Crunch",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Mirror Coat",
		effect:
			"Targets the last opposing Pokémon to hit the user with a special move this turn.  Inflicts twice the damage that move did to the user.  If there is no eligible target, this move will fail.  Type immunity applies, but other type effects are ignored.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psych Up",
		effect:
			"Discards the user’s stat changes and copies the target’s.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Extreme Speed",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ancient Power",
		effect:
			"Inflicts regular damage. Has a chance to raise all of the user’s stats one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Shadow Ball",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Future Sight",
		effect:
			"Inflicts typeless regular damage at the end of the third turn, starting with this one.  This move cannot score a critical hit.  If the target switches out, its replacement will be hit instead.  Damage is calculated at the time this move is used; stat changes and switching out during the delay won’t change the damage inflicted.  No move with this effect can be used against the same target again until after the end of the third turn.\n\nThis effect breaks through Wonder Guard.\n\nIf the target is protected by Protect or Detect on the turn this move is used, this move will fail.  However, the damage on the third turn will break through protection.\n\nThe damage is applied at the end of the turn, so it ignores Endure and Focus Sash.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rock Smash",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Whirlpool",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nIf the target is in the first turn of Dive, this move will hit with double power.",
		accuracy: 85,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Beat Up",
		effect:
			"Inflicts typeless regular damage.  Every Pokémon in the user’s party, excepting those that have fainted or have a major status effect, attacks the target.  Calculated stats are ignored; the base stats for the target and assorted attackers are used instead.  The random factor in the damage formula is not used.  Dark Pokémon still get STAB.\n\nThis effect breaks through Wonder Guard.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fake Out",
		effect:
			"Inflicts regular damage.  Causes the target to flinch.  Can only be used on the user’s first turn after entering the field.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target flinched!",
	},
	{
		name: "Uproar",
		effect:
			"Inflicts regular damage.  User is forced to use this move for 2–5 turns, selected at random.  All Pokémon on the field wake up, and none can fall to sleep until the lock-in ends.\n\nPokémon cannot use Rest during this effect.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Stockpile",
		effect:
			"Raises the user’s Defense and Special Defense by one stage each.  Stores energy for use with Spit Up and Swallow.  Up to three levels of energy can be stored, and all are lost if the user leaves the field.  Energy is still stored even if the stat boosts cannot be applied.\n\nIf the user uses Baton Pass, the stat boosts are passed as normal, but the stored energy is not.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spit Up",
		effect:
			"Inflicts regular damage.  Power is equal to 100 times the amount of energy stored by Stockpile.  Ignores the random factor in the damage formula.  Stored energy is consumed, and the user’s Defense and Special Defense are reset to what they would be if Stockpile had not been used.  If the user has no energy stored, this move will fail.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Swallow",
		effect:
			"Heals the user depending on the amount of energy stored by Stockpile: 1/4 its max HP after one use, 1/2 its max HP after two uses, or fully after three uses.  Stored energy is consumed, and the user’s Defense and Special Defense are reset to what they would be if Stockpile had not been used.  If the user has no energy stored, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Heat Wave",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 90,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Hail",
		effect:
			"Changes the weather to hail for five turns, during which non-Ice Pokémon are damaged for 1/16 their max HP at the end of every turn.\n\nIf the user is holding Icy Rock, this effect lasts for eight turns.\n\nBlizzard has 100% accuracy.  If the target has used Detect or Protect, Blizzard has a (100 - accuracy)% chance to break through the protection.\n\nMoonlight, Morning Sun, and Synthesis heal only 1/4 of the user’s max HP.\n\nPokémon with Snow Cloak are exempt from this effect’s damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Torment",
		effect:
			"Prevents the target from attempting to use the same move twice in a row.  When the target leaves the field, this effect ends.\n\nIf the target is forced to attempt a repeated move due to Choice Band, Choice Scarf, Choice Specs, Disable, Encore, Taunt, only having PP remaining for one move, or any other effect, the target will use Struggle instead.  The target is then free to use the forced move next turn, as it didn’t use that move this turn.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flatter",
		effect:
			"Raises the target’s Special Attack by one stage, then confuses it.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Will O Wisp",
		effect: "Burns the target.",
		accuracy: 85,
		effectChance: null,
		narrative: "The target was burned!",
	},
	{
		name: "Memento",
		effect:
			"Lowers the target’s Attack and Special Attack by two stages.  User faints.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Facade",
		effect:
			"Inflicts regular damage.  If the user is burned, paralyzed, or poisoned, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target was burned!",
	},
	{
		name: "Focus Punch",
		effect:
			"Inflicts regular damage.  If the user takes damage this turn before hitting, this move will fail.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist, Metronome, or Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Smelling Salts",
		effect:
			"Inflicts regular damage.  If the target is paralyzed, this move has double power, and the target is cured of its paralysis.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Follow Me",
		effect:
			"Until the end of this turn, any moves that opposing Pokémon target solely at the user’s ally will instead target the user.  If both Pokémon on the same side of the field use this move on the same turn, the Pokémon that uses it last will become the target.\n\nThis effect takes priority over Lightning Rod and Storm Drain.\n\nIf the user’s ally switches out, opposing Pokémon may still hit it with Pursuit.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Nature Power",
		effect:
			"Uses another move chosen according to the terrain.\n\nTerrain                   | Selected move\n------------------------- | ------------------\nBuilding                  | Tri Attack\nCave                      | Rock Slide\nDeep water                | Hydro Pump\nDesert                    | Earthquake\nGrass                     | Seed Bomb\nMountain                  | Rock Slide\nRoad                      | Earthquake\nShallow water             | Hydro Pump\nSnow                      | Blizzard\nTall grass                | Seed Bomb\nElectric Terrain | Thunderbolt\nGrassy Terrain   | Energy Ball\nMisty Terrain    | Moonblast\n\nIn Pokémon Battle Revolution:\n\nTerrain        | Selected move\n-------------- | ------------------\nCourtyard      | Tri Attack\nCrystal        | Rock Slide\nGateway        | Hydro Pump\nMagma          | Rock Slide\nMain Street    | Tri Attack\nNeon           | Tri Attack\nStargazer      | Rock Slide\nSunny Park     | Seed Bomb\nSunset         | Earthquake\nWaterfall      | Seed Bomb\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Charge",
		effect:
			"Raises the user’s Special Defense by one stage.  If the user uses an Electric move next turn, its power will be doubled.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Taunt",
		effect:
			"Target is forced to only use damaging moves for the next 3–5 turns, selected at random.  Moves that select other moves not known in advance do not count as damaging.\n\nAssist, Copycat, Me First, Metronome, Mirror Move, and Sleep Talk do not directly inflict damage and thus may not be used.\n\nBide, Counter, Endeavor, Metal Burst, and Mirror Coat are allowed.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Helping Hand",
		effect:
			"Boosts the power of the target’s moves by 50% until the end of this turn.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Trick",
		effect:
			"User and target permanently swap held items.  Works even if one of the Pokémon isn’t holding anything.  If either Pokémon is holding mail, this move will fail.\n\nIf either Pokémon has Multitype or Sticky Hold, this move will fail.\n\nIf this move results in a Pokémon obtaining Choice Band, Choice Scarf, or Choice Specs, and that Pokémon was the latter of the pair to move this turn, then the move it used this turn becomes its chosen forced move.  This applies even if both Pokémon had a choice item before this move was used.  If the first of the two Pokémon gains a choice item, it may select whatever choice move it wishes next turn.\n\nNeither the user nor the target can recover its item with Recycle.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Role Play",
		effect:
			"User’s ability is replaced with the target’s until the user leaves the field.  Ignores accuracy and evasion modifiers.\n\nIf the target has Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, or Zen Mode, this move will fail.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wish",
		effect:
			"At the end of the next turn, user will be healed for half its max HP.  If the user is switched out, its replacement will be healed instead for half of the user’s max HP.  If the user faints or is forcefully switched by Roar or Whirlwind, this effect will not activate.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Assist",
		effect:
			"Uses a move from another Pokémon in the user’s party, both selected at random.  Moves from fainted Pokémon can be used.  If there are no eligible Pokémon or moves, this move will fail.\n\nThis move will not select Assist, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly Focus Punch, Follow Me, Helping Hand, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Phantom Force Protect, Quick Guard, Roar Shadow Force, Sketch, Sleep Talk, Snatch, Struggle, Switcheroo, Thief, Trick, Whirlwind, or Wide Guard.\n\nThis move cannot be copied by Mirror Move, nor selected by Metronome or Sleep Talk.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ingrain",
		effect:
			"Prevents the user from switching out.  User regains 1/16 of its max HP at the end of every turn.  If the user was immune to Ground attacks, it will now take normal damage from them.\n\nRoar and Whirlwind will not affect the user.  The user cannot use Magnet Rise.\n\nThe user may still use U-turn to leave the field.\n\nThis effect can be passed with Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Superpower",
		effect:
			"Inflicts regular damage, then lowers the user’s Attack and Defense by one stage each.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Magic Coat",
		effect:
			"The first non-damaging move targeting the user this turn that inflicts major status effects, stat changes, or trapping effects will be reflected at its user.\n\nDefog, Memento, and Teeter Dance are not reflected.\n\nAttract, Flatter, Gastro Acid, Leech Seed, Swagger, Worry Seed, and Yawn are reflected.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Recycle",
		effect:
			"User recovers the last item consumed by the user or a Pokémon in its position on the field.  The item must be used again before it can be recovered by this move again.  If the user is holding an item, this move fails.\n\nItems taken or given away by Covet, Knock Off, Switcheroo, Thief, or Trick may not be recovered.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Revenge",
		effect:
			"Inflicts regular damage.  If the target damaged the user this turn and was the last to do so, this move has double power.\n\nPain Split does not count as damaging the user.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Brick Break",
		effect:
			"Destroys any Light Screen or Reflect on the target’s side of the field, then inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Yawn",
		effect:
			"Puts the target to sleep at the end of the next turn.  Ignores accuracy and evasion modifiers.  If the target leaves the field, this effect is canceled.  If the target has a status effect when this move is used, this move will fail.\n\nIf the target is protected by Safeguard when this move is used, this move will fail.\n\nInsomnia and Vital Spirit prevent the sleep if the target has either at the end of the next turn, but will not cause this move to fail on use.",
		accuracy: null,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Knock Off",
		effect:
			"Inflicts regular damage.  Target loses its held item.\n\nNeither the user nor the target can recover its item with Recycle.\n\nIf the target has Multitype or Sticky Hold, it will take damage but not lose its item.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Endeavor",
		effect:
			"Inflicts exactly enough damage to lower the target’s HP to equal the user’s.  If the target’s HP is not higher than the user’s, this move has no effect.  Type immunity applies, but other type effects are ignored.  This effect counts as damage for moves that respond to damage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Eruption",
		effect:
			"Inflicts regular damage.  Power increases with the user’s remaining HP and is given by `150 * HP / max HP`, to a maximum of 150 when the user has full HP.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Skill Swap",
		effect:
			"User and target switch abilities.  Ignores accuracy and evasion modifiers.\n\nIf either Pokémon has Multitype or Wonder Guard, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Imprison",
		effect:
			"Prevents any Pokémon on the opposing side of the field from using any move the user knows until the user leaves the field.  This effect is live; if the user obtains new moves while on the field, these moves become restricted.  If no opposing Pokémon knows any of the user’s moves when this move is used, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Refresh",
		effect: "Removes a burn, paralysis, or poison from the user.",
		accuracy: null,
		effectChance: null,
		narrative: "The target was burned!",
	},
	{
		name: "Grudge",
		effect:
			"If the user faints before it next acts, the move that fainted it will have its PP dropped to 0.  End-of-turn damage does not trigger this effect.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Snatch",
		effect:
			'The next time a Pokémon uses a beneficial move on itself or itself and its ally this turn, the user of this move will steal the move and use it itself.  Moves which may be stolen by this move are identified by the "snatchable" flag.\n\nIf two Pokémon use this move on the same turn, the faster Pokémon will steal the first beneficial move, and the slower Pokémon will then steal it again—thus, only the slowest Pokémon using this move ultimately gains a stolen move’s effect.\n\nIf the user steals Psych Up, it will target the Pokémon that used Psych Up.  If the user was the original target of Psych Up, and the Pokémon that originally used it’s affected by Pressure, it will only lose 1 PP.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist or Metronome.',
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Secret Power",
		effect:
			"Inflicts regular damage.  Has a chance to inflict an effect chosen according to the terrain.\n\nTerrain        | Effect\n-------------- | -------------------------------------------------------------\nBuilding       | Paralyzes target\nCave           | Makes target flinch\nDeep water     | Lowers target’s Attack by one stage\nDesert         | Lowers target’s accuracy by one stage\nGrass          | Puts target to sleep\nMountain       | Makes target flinch\nRoad           | Lowers target’s accuracy by one stage\nShallow water  | Lowers target’s Attack by one stage\nSnow           | Freezes target\nTall grass     | Puts target to sleep\n\nIn Pokémon Battle Revolution:\n\nTerrain        | Effect\n-------------- | -------------------------------------------------------------\nCourtyard      | Paralyzes target\nCrystal        | Makes target flinch\nGateway        | Lowers target’s Attack by one stage\nMagma          | Makes target flinch\nMain Street    | Paralyzes target\nNeon           | Paralyzes target\nStargazer      | Makes target flinch\nSunny Park     | Puts target to sleep\nSunset         | Lowers target’s accuracy by one stage\nWaterfall      | Puts target to sleep\n",
		accuracy: 100,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Dive",
		effect:
			"Inflicts regular damage.  User dives underwater for one turn, becoming immune to attack, and hits on the second turn.\n\nDuring the immune turn, Surf, and Whirlpool still hit the user normally, and their power is doubled if appropriate.\n\nThe user may be hit during its immune turn if under the effect of Lock-On, Mind Reader, or No Guard.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Arm Thrust",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Camouflage",
		effect:
			"User’s type changes according to the terrain.\n\nTerrain        | New type\n-------------- | --------------\nBuilding       | Normal\nCave           | Rock\nDesert         | Ground\nGrass          | Grass\nMountain       | Rock\nOcean          | Water\nPond           | Water\nRoad           | Ground\nSnow           | Ice\nTall grass     | Grass\n\nIn Pokémon Battle Revolution:\n\nTerrain        | New type\n-------------- | --------------\nCourtyard      | Normal\nCrystal        | Rock\nGateway        | Water\nMagma          | Rock\nMain Street    | Normal\nNeon           | Normal\nStargazer      | Rock\nSunny Park     | Grass\nSunset         | Ground\nWaterfall      | Grass\n",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tail Glow",
		effect: "Raises the user’s Special Attack by three stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Luster Purge",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Mist Ball",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Attack by one stage.",
		accuracy: 100,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Feather Dance",
		effect: "Lowers the target’s Attack by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Teeter Dance",
		effect: "Confuses all targets.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Blaze Kick",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move. Has a chance to burn the target.",
		accuracy: 90,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Mud Sport",
		effect:
			"Electric moves inflict half damage, regardless of target.  If the user leaves the field, this effect ends.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ice Ball",
		effect:
			"Inflicts regular damage.  User is forced to use this move for five turns.  Power doubles every time this move is used in succession to a maximum of 16x, and resets to normal after the lock-in ends.  If this move misses or becomes unusable, the lock-in ends.\n\nIf the user has used Defense Curl since entering the field, this move has double power.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Needle Arm",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Slack Off",
		effect: "Heals the user for half its max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hyper Voice",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Poison Fang",
		effect:
			"Inflicts regular damage.  Has a chance to badly poison the target.",
		accuracy: 100,
		effectChance: 50,
		narrative: "The target was poisoned!",
	},
	{
		name: "Crush Claw",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 95,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Blast Burn",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hydro Cannon",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Meteor Mash",
		effect:
			"Inflicts regular damage. Has a chance to raise the user’s Attack one stage.",
		accuracy: 90,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Astonish",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Weather Ball",
		effect:
			"Inflicts regular damage.  If a weather move is active, this move has double power, and its type becomes the type of the weather move.  Shadow Sky is typeless for the purposes of this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aromatherapy",
		effect:
			"Removes major status effects and confusion from every Pokémon in the user’s party.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fake Tears",
		effect: "Lowers the target’s Special Defense by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Air Cutter",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Overheat",
		effect:
			"Inflicts regular damage, then lowers the user’s Special Attack by two stages.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Odor Sleuth",
		effect:
			"Resets the target’s evasion to normal and prevents any further boosting until the target leaves the field.  A Ghost under this effect takes normal damage from Normal and Fighting moves.  This move itself ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rock Tomb",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 95,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Silver Wind",
		effect:
			"Inflicts regular damage. Has a chance to raise all of the user’s stats one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Metal Sound",
		effect: "Lowers the target’s Special Defense by two stages.",
		accuracy: 85,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Grass Whistle",
		effect: "Puts the target to sleep.",
		accuracy: 55,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Tickle",
		effect: "Lowers the target’s Attack and Defense by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Cosmic Power",
		effect: "Raises the user’s Defense and Special Defense by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Water Spout",
		effect:
			"Inflicts regular damage.  Power increases with the user’s remaining HP and is given by `150 * HP / max HP`, to a maximum of 150 when the user has full HP.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Signal Beam",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target became confused!",
	},
	{
		name: "Shadow Punch",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Extrasensory",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target flinched!",
	},
	{
		name: "Sky Uppercut",
		effect:
			"Inflicts regular damage.\n\nThis move can hit Pokémon under the effect of Bounce, Fly, or Sky Drop.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sand Tomb",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 85,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Sheer Cold",
		effect:
			"Inflicts damage equal to the target’s max HP.  Ignores accuracy and evasion modifiers.  This move’s accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail.\n\nBecause this move inflicts a specific and finite amount of damage, Endure still prevents the target from fainting.\n\nThe effects of Lock-On, Mind Reader, and No Guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through Detect or Protect.",
		accuracy: 30,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Muddy Water",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 85,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Bullet Seed",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aerial Ace",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Icicle Spear",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Iron Defense",
		effect: "Raises the user’s Defense by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Block",
		effect:
			"The target cannot switch out normally.  Ignores accuracy and evasion modifiers.  This effect ends when the user leaves the field.\n\nThe target may still escape by using Baton Pass, U-turn, or a Shed Shell.\n\nBoth the user and the target pass on this effect with Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Howl",
		effect: "Raises the user’s Attack by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Dragon Claw",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Frenzy Plant",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bulk Up",
		effect: "Raises the user’s Attack and Defense by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Bounce",
		effect:
			"Inflicts regular damage.  User bounces high into the air for one turn, becoming immune to attack, and hits on the second turn.  Has a chance to paralyze the target.\n\nDuring the immune turn, Gust, Hurricane, Sky Uppercut, Smack Down, Thunder, and Twister still hit the user normally.  Gust and Twister also have double power against the user.\n\nThe damage from Hail and Sandstorm still applies during the immune turn.\n\nThe user may be hit during its immune turn if under the effect of Lock-On, Mind Reader, or No Guard.\n\nThis move cannot be used while Gravity is in effect.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 85,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Mud Shot",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 95,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Poison Tail",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move. Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was poisoned!",
	},
	{
		name: "Covet",
		effect:
			"Inflicts regular damage.  If the target is holding an item and the user is not, the user will permanently take the item.  Damage is still inflicted if an item cannot be taken.\n\nPokémon with Sticky Hold or Multitype are immune to the item theft effect.\n\nThe target cannot recover its item with Recycle.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Volt Tackle",
		effect:
			"Inflicts regular damage.  User takes 1/3 the damage it inflicts in recoil.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Magical Leaf",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Water Sport",
		effect:
			"Fire moves inflict half damage, regardless of target.  If the user leaves the field, this effect ends.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Calm Mind",
		effect:
			"Raises the user’s Special Attack and Special Defense by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Leaf Blade",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dragon Dance",
		effect: "Raises the user’s Attack and Speed by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Rock Blast",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shock Wave",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Water Pulse",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target became confused!",
	},
	{
		name: "Doom Desire",
		effect:
			"Inflicts typeless regular damage at the end of the third turn, starting with this one.  This move cannot score a critical hit.  If the target switches out, its replacement will be hit instead.  Damage is calculated at the time this move is used; stat changes and switching out during the delay won’t change the damage inflicted.  No move with this effect can be used against the same target again until after the end of the third turn.\n\nThis effect breaks through Wonder Guard.\n\nIf the target is protected by Protect or Detect on the turn this move is used, this move will fail.  However, the damage on the third turn will break through protection.\n\nThe damage is applied at the end of the turn, so it ignores Endure and Focus Sash.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psycho Boost",
		effect:
			"Inflicts regular damage, then lowers the user’s Special Attack by two stages.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Roost",
		effect:
			"Heals the user for half its max HP.  If the user is Flying, its Flying type is ignored until the end of this turn.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gravity",
		effect:
			"For five turns (including this one), all immunities to Ground moves are disabled.  For the duration of this effect, the evasion of every Pokémon on the field is lowered by two stages.  Cancels the effects of Bounce, Fly, and Sky Drop.\n\nSpecifically, Flying Pokémon and those with Levitate or that have used Magnet Rise are no longer immune to Ground attacks, Arena Trap, Spikes, or Toxic Spikes.\n\nBounce, Fly, Sky Drop, High Jump Kick, Jump Kick, and Splash cannot be used while this move is in effect.\n\n*Bug*: If this move is used during a double or triple battle while Pokémon are under the effect of Sky Drop, Sky Drop’s effect is not correctly canceled on its target, and it remains high in the air indefinitely.  As Sky Drop prevents the target from acting, the only way to subsequently remove it from the field is to faint it.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Miracle Eye",
		effect:
			"Resets the target’s evasion to normal and prevents any further boosting until the target leaves the field.  A Dark Pokémon under this effect takes normal damage from Psychic moves.  This move itself ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wake Up Slap",
		effect:
			"Inflicts regular damage.  If the target is sleeping, this move has double power, and the target wakes up.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Hammer Arm",
		effect:
			"Inflicts regular damage, then lowers the user’s Speed by one stage.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Gyro Ball",
		effect:
			"Inflicts regular damage.  Power increases with the target’s current Speed compared to the user, given by `1 + 25 * target Speed / user Speed`, capped at 150.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Healing Wish",
		effect:
			"User faints.  Its replacement’s HP is fully restored, and any major status effect is removed.  If the replacement Pokémon is immediately fainted by a switch-in effect, the next replacement is healed by this move instead.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Brine",
		effect:
			"Inflicts regular damage.  If the target has less than half its max HP remaining, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Natural Gift",
		effect:
			"Inflicts regular damage.  Power and type are determined by the user’s held berry.  The berry is consumed.  If the user is not holding a berry, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Feint",
		effect:
			"Inflicts regular damage.  Removes the effects of Detect or Protect from the target before hitting.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Pluck",
		effect:
			"Inflicts regular damage.  If the target is holding a berry, this move has double power, and the user takes the berry and uses it immediately.\n\nIf the target is holding a Jaboca Berry or Rowap Berry, the berry is still removed, but has no effect.\n\nIf this move is super effective and the target is holding a berry that can reduce this move’s damage, it will do so, and will not be stolen.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tailwind",
		effect:
			"For the next three turns, all Pokémon on the user’s side of the field have their original Speed doubled.  This effect remains if the user leaves the field.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Acupressure",
		effect:
			"Raises one of the target’s stats by two stages.  The raised stat is chosen at random from any stats that can be raised by two stages.  If no stat is eligible, this move will fail.\n\nIf the target has a Substitute, this move will have no effect, even if the user is the target.\n\nThis move cannot be copied by Mirror Move.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Metal Burst",
		effect:
			"Targets the last opposing Pokémon to hit the user with a damaging move this turn.  Inflicts 1.5× the damage that move did to the user.  If there is no eligible target, this move will fail.  Type immunity applies, but other type effects are ignored.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "U Turn",
		effect:
			"Inflicts regular damage, then the user immediately switches out, and the trainer selects a replacement Pokémon from the party.  If the target faints from this attack, the user’s trainer selects the new Pokémon to send out first.  If the user is the last Pokémon in its party that can battle, it will not switch out.\n\nThe user may be hit by Pursuit when it switches out, if it has been targeted and Pursuit has not yet been used.\n\nThis move may be used even if the user is under the effect of Ingrain.  Ingrain’s effect will end.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Close Combat",
		effect:
			"Inflicts regular damage, then lowers the user’s Defense and Special Defense by one stage each.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Payback",
		effect:
			"Inflicts regular damage.  If the target uses a move or switches out this turn before this move is used, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Assurance",
		effect:
			"Inflicts regular damage.  If the target takes damage this turn for any reason before this move is used, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Embargo",
		effect:
			"Target cannot use its held item for five turns.  If the target leaves the field, this effect ends.\n\nIf a Pokémon under this effect uses Bug Bite or Pluck on a Pokémon holding a berry, the berry is destroyed but not used.  If a Pokémon under this effect uses Fling, it will fail.\n\nThis effect is passed by Baton Pass.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fling",
		effect:
			"Inflicts regular damage.  Power and type are determined by the user’s held item.  The item is consumed.  If the user is not holding an item, or its item has no set type and power, this move will fail.\n\nThis move ignores Sticky Hold.\n\nIf the user is under the effect of Embargo, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psycho Shift",
		effect:
			"If the user has a major status effect and the target does not, the user’s status is transferred to the target.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Trump Card",
		effect:
			"Inflicts regular damage.  Power is determined by the PP remaining for this move, after its PP cost is deducted.  Ignores accuracy and evasion modifiers.\n\nPP remaining | Power\n------------ | ----:\n4 or more    |    40\n3            |    50\n2            |    60\n1            |    80\n0            |   200\n\nIf this move is activated by another move, the activating move’s PP is used to calculate power.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Heal Block",
		effect:
			"For the next five turns, the target may not use any moves that only restore HP, and move effects that heal the target are disabled.  Moves that steal HP may still be used, but will only inflict damage and not heal the target.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wring Out",
		effect:
			"Inflicts regular damage.  Power directly relates to the target’s relative remaining HP, given by `1 + 120 * current HP / max HP`, to a maximum of 121.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Power Trick",
		effect:
			"The user’s original Attack and Defense are swapped.\n\nThis effect is passed on by Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gastro Acid",
		effect:
			"The target’s ability is disabled as long as it remains on the field.\n\nThis effect is passed on by Baton Pass.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lucky Chant",
		effect: "For five turns, opposing Pokémon cannot score critical hits.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Me First",
		effect:
			"If the target has selected a damaging move this turn, the user will copy that move and use it against the target, with a 50% increase in power.\n\nIf the target moves before the user, this move will fail.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist, Metronome, or Sleep Talk.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Copycat",
		effect:
			"Uses the last move that was used successfully by any Pokémon, including the user.\n\nThis move cannot copy itself, nor Roar nor Whirlwind.\n\nThis move cannot be copied by Mirror Move, nor selected by Assist, Metronome, or Sleep Talk.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Power Swap",
		effect:
			"User swaps its Attack and Special Attack stat modifiers modifiers with the target.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Guard Swap",
		effect:
			"User swaps its Defense and Special Defense modifiers with the target.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Punishment",
		effect:
			"Inflicts regular damage.  Power starts at 60 and is increased by 20 for every stage any of the target’s stats has been raised, capping at 200.  Accuracy and evasion modifiers do not increase this move’s power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Last Resort",
		effect:
			"Inflicts regular damage.  This move can only be used if each of the user’s other moves has been used at least once since the user entered the field.  If this is the user’s only move, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Worry Seed",
		effect:
			"Changes the target’s ability to Insomnia.\n\nIf the target’s ability is Truant or Multitype, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sucker Punch",
		effect:
			"Inflicts regular damage.  If the target has not selected a damaging move this turn, or if the target has already acted this turn, this move will fail.\n\nThis move is not affected by Iron Fist.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Toxic Spikes",
		effect:
			"Scatters poisoned spikes around the opposing field, which poison opposing Pokémon that enter the field.  A second layer of these spikes may be laid down, in which case Pokémon will be badly poisoned instead.  Pokémon immune to either Ground moves or being poisoned are immune to this effect.  Pokémon otherwise immune to Ground moves are affected during Gravity.\n\nIf a Poison Pokémon not immune to Ground moves enters a field covered with poisoned spikes, the spikes are removed.\n\nRapid Spin will remove this effect from its user’s side of the field.  Defog will remove this effect from its target’s side of the field.\n\nThis move does not trigger Synchronize, unless the Pokémon with Synchronize was forced to enter the field by another effect such as Roar.\n\nPokémon entering the field due to Baton Pass are not affected by this effect.",
		accuracy: null,
		effectChance: null,
		narrative: "The target was poisoned!",
	},
	{
		name: "Heart Swap",
		effect: "User swaps its stat modifiers with the target.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aqua Ring",
		effect:
			"Restores 1/16 of the user’s max HP at the end of each turn.  If the user leaves the field, this effect ends.\n\nThis effect is passed on by Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Magnet Rise",
		effect:
			"For five turns, the user is immune to Ground moves.\n\nIf the user is under the effect of Ingrain or has Levitate, this move will fail.\n\nThis effect is temporarily disabled by and cannot be used during Gravity.\n\nThis effect is passed on by Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flare Blitz",
		effect:
			"Inflicts regular damage.  User takes 1/3 the damage it inflicts in recoil.  Has a chance to burn the target.  Frozen Pokémon may use this move, in which case they will thaw.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Force Palm",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Aura Sphere",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rock Polish",
		effect: "Raises the user’s Speed by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Poison Jab",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was poisoned!",
	},
	{
		name: "Dark Pulse",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 20,
		narrative: "The target flinched!",
	},
	{
		name: "Night Slash",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aqua Tail",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Seed Bomb",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Air Slash",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 95,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "X Scissor",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bug Buzz",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Dragon Pulse",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dragon Rush",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 75,
		effectChance: 20,
		narrative: "The target flinched!",
	},
	{
		name: "Power Gem",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Drain Punch",
		effect:
			"Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Vacuum Wave",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Focus Blast",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 70,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Energy Ball",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Brave Bird",
		effect:
			"Inflicts regular damage.  User takes 1/3 the damage it inflicts in recoil.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Earth Power",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Switcheroo",
		effect:
			"User and target permanently swap held items.  Works even if one of the Pokémon isn’t holding anything.  If either Pokémon is holding mail, this move will fail.\n\nIf either Pokémon has Multitype or Sticky Hold, this move will fail.\n\nIf this move results in a Pokémon obtaining Choice Band, Choice Scarf, or Choice Specs, and that Pokémon was the latter of the pair to move this turn, then the move it used this turn becomes its chosen forced move.  This applies even if both Pokémon had a choice item before this move was used.  If the first of the two Pokémon gains a choice item, it may select whatever choice move it wishes next turn.\n\nNeither the user nor the target can recover its item with Recycle.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Giga Impact",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Nasty Plot",
		effect: "Raises the user’s Special Attack by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Bullet Punch",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Avalanche",
		effect:
			"Inflicts regular damage.  If the target damaged the user this turn and was the last to do so, this move has double power.\n\nPain Split does not count as damaging the user.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ice Shard",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Claw",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Thunder Fang",
		effect:
			"Inflicts regular damage.  Has a chance to paralyze the target and a separate chance to make the target flinch.",
		accuracy: 95,
		effectChance: 10,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Ice Fang",
		effect:
			"Inflicts regular damage.  Has a chance to freeze the target and a separate chance to make the target flinch.",
		accuracy: 95,
		effectChance: 10,
		narrative: "The target was frozen solid!",
	},
	{
		name: "Fire Fang",
		effect:
			"Inflicts regular damage.  Has a chance to burn the target and a separate chance to make the target flinch.",
		accuracy: 95,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Shadow Sneak",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mud Bomb",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 85,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Psycho Cut",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Zen Headbutt",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 90,
		effectChance: 20,
		narrative: "The target flinched!",
	},
	{
		name: "Mirror Shot",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 85,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Flash Cannon",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Rock Climb",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 85,
		effectChance: 20,
		narrative: "The target became confused!",
	},
	{
		name: "Defog",
		effect:
			"Lowers the target’s evasion by one stage.  Clears away fog.  Removes the effects of Mist, Light Screen, Reflect, Safeguard, Spikes, Stealth Rock, and Toxic Spikes from the target’s side of the field.\n\nIf the target is protected by Mist, it will prevent the evasion change, then be removed by this move.",
		accuracy: null,
		effectChance: null,
		narrative: "The user targeted the field!",
	},
	{
		name: "Trick Room",
		effect:
			"For five turns (including this one), slower Pokémon will act before faster Pokémon.  Move priority is not affected.  Using this move when its effect is already active will end the effect.\n\nPokémon holding Full Incense, Lagging Tail, or Quick Claw and Pokémon with Stall ignore this effect.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Draco Meteor",
		effect:
			"Inflicts regular damage, then lowers the user’s Special Attack by two stages.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Discharge",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Lava Plume",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was burned!",
	},
	{
		name: "Leaf Storm",
		effect:
			"Inflicts regular damage, then lowers the user’s Special Attack by two stages.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Power Whip",
		effect: "Inflicts regular damage.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rock Wrecker",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Cross Poison",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move. Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was poisoned!",
	},
	{
		name: "Gunk Shot",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 80,
		effectChance: 30,
		narrative: "The target was poisoned!",
	},
	{
		name: "Iron Head",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Magnet Bomb",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stone Edge",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Captivate",
		effect:
			"Lowers the target’s Special Attack by two stages.  If the user and target are the same gender, or either is genderless, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Stealth Rock",
		effect:
			"Spreads sharp rocks around the opposing field, damaging any Pokémon that enters the field for 1/8 its max HP.  This damage is affected by the entering Pokémon’s susceptibility to Rock moves.\n\nRapid Spin removes this effect from its user’s side of the field.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Grass Knot",
		effect:
			"Inflicts regular damage.  Power increases with the target’s weight in kilograms, to a maximum of 120.\n\nTarget’s weight | Power\n--------------- | ----:\nUp to 10kg      |    20\nUp to 25kg      |    40\nUp to 50kg      |    60\nUp to 100kg     |    80\nUp to 200kg     |   100\nAbove 200kg     |   120\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Chatter",
		effect:
			"Inflicts regular damage.  Has either a 1%, 11%, or 31% chance to confuse the target, based on the volume of the recording made for this move; louder recordings increase the chance of confusion.  If the user is not a Chatot, this move will not cause confusion.\n\nThis move cannot be copied by Mimic, Mirror Move, or Sketch, nor selected by Assist, Metronome, or Sleep Talk.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target became confused!",
	},
	{
		name: "Judgment",
		effect:
			"Inflicts regular damage.  If the user is holding a plate or a drive, this move’s type is the type corresponding to that item.\n\nNote: This effect is technically shared by both Techno Blast and Judgment; however, Techno Blast is only affected by drives, and Judgment is only affected by plates.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bug Bite",
		effect:
			"Inflicts regular damage.  If the target is holding a berry, this move has double power, and the user takes the berry and uses it immediately.\n\nIf the target is holding a Jaboca Berry or Rowap Berry, the berry is still removed, but has no effect.\n\nIf this move is super effective and the target is holding a berry that can reduce this move’s damage, it will do so, and will not be stolen.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Charge Beam",
		effect:
			"Inflicts regular damage.  Has a chance to raise the user’s Special Attack by one stage.",
		accuracy: 90,
		effectChance: 70,
		narrative: null,
	},
	{
		name: "Wood Hammer",
		effect:
			"Inflicts regular damage.  User takes 1/3 the damage it inflicts in recoil.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Aqua Jet",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Attack Order",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Defend Order",
		effect: "Raises the user’s Defense and Special Defense by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Heal Order",
		effect: "Heals the user for half its max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Head Smash",
		effect:
			"Inflicts regular damage.  User takes 1/2 the damage it inflicts in recoil.",
		accuracy: 80,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Double Hit",
		effect: "Inflicts regular damage.  Hits twice in one turn.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Roar Of Time",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spacial Rend",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lunar Dance",
		effect:
			"User faints.  Its replacement’s HP and PP are fully restored, and any major status effect is removed.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Crush Grip",
		effect:
			"Inflicts regular damage.  Power directly relates to the target’s relative remaining HP, given by `1 + 120 * current HP / max HP`, to a maximum of 121.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Magma Storm",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 75,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Dark Void",
		effect: "Puts the target to sleep.",
		accuracy: 50,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Seed Flare",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Defense by two stages.",
		accuracy: 85,
		effectChance: 40,
		narrative: null,
	},
	{
		name: "Ominous Wind",
		effect:
			"Inflicts regular damage. Has a chance to raise all of the user’s stats one stage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Shadow Force",
		effect:
			"Inflicts regular damage.  User vanishes for one turn, becoming immune to attack, and hits on the second turn.\n\nThis move ignores the effects of Detect and Protect.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hone Claws",
		effect: "Raises the user’s Attack and accuracy by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Wide Guard",
		effect:
			"Moves with multiple targets will not hit friendly Pokémon for the remainder of this turn.  If the user is last to act this turn, this move will fail.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Guard Split",
		effect:
			"Averages the user’s unmodified Defense with the target’s unmodified Defense; the value becomes the unmodified Defense for both Pokémon. Unmodified Special Defense is averaged the same way.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Power Split",
		effect:
			"Averages the user’s unmodified Attack with the target’s unmodified Attack; the value becomes the unmodified Attack for both Pokémon. Unmodified Special Attack is averaged the same way.\n\nThis effect applies before any other persistent changes to unmodified Attack or Special Attack, such as Flower Gift during Sunny Day.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wonder Room",
		effect:
			"For five turns (including this one), every Pokémon’s Defense and Special Defense are swapped.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psyshock",
		effect:
			"Inflicts regular damage.  Damage calculation always uses the target’s Defense, regardless of this move’s damage class.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Venoshock",
		effect:
			"Inflicts regular damage.  If the target is poisoned, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target was poisoned!",
	},
	{
		name: "Autotomize",
		effect:
			"Raises the user’s Speed by two stages.  Halves the user’s weight; this effect does not stack.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Rage Powder",
		effect:
			"Until the end of this turn, any moves that opposing Pokémon target solely at the user’s ally will instead target the user.  If both Pokémon on the same side of the field use this move on the same turn, the Pokémon that uses it last will become the target.\n\nThis effect takes priority over Lightning Rod and Storm Drain.\n\nIf the user’s ally switches out, opposing Pokémon may still hit it with Pursuit.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Telekinesis",
		effect:
			"For three turns (including this one), moves used against the target have 100% accuracy, but the target is immune to Ground damage.  Accuracy of one-hit KO moves is exempt from this effect.\n\nThis effect is removed by Gravity.  If Gravity is already in effect, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Magic Room",
		effect:
			"For five turns (including this one), passive effects of held items are ignored, and Pokémon will not use their held items.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Smack Down",
		effect:
			"Inflicts regular damage.  Removes the target’s immunity to Ground-type damage.  This effect removes any existing Ground immunity due to Levitate, Magnet Rise, or Telekinesis, and causes the target’s Flying type to be ignored when it takes Ground damage.\n\nIf the target isn’t immune to Ground damage, this move will fail.\n\nThis move can hit Pokémon under the effect of Bounce, Fly, or Sky Drop, and ends the effect of Bounce or Fly.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Storm Throw",
		effect: "Inflicts regular damage.  Always scores a critical hit.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flame Burst",
		effect:
			"Inflicts regular damage.  If this move successfully hits the target, any Pokémon adjacent to the target are damaged for 1/16 their max HP.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sludge Wave",
		effect: "Inflicts regular damage.  Has a chance to poison the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was poisoned!",
	},
	{
		name: "Quiver Dance",
		effect:
			"Raises the user’s Special Attack, Special Defense, and Speed by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Heavy Slam",
		effect:
			"Inflicts regular damage.  The greater the user’s weight compared to the target’s, the higher power this move has, to a maximum of 120.\n\nUser’s weight                    | Power\n-------------------------------- | ----:\nUp to 2× the target’s weight     |    40\nUp to 3× the target’s weight     |    60\nUp to 4× the target’s weight     |    80\nUp to 5× the target’s weight     |   100\nMore than 5× the target’s weight |   120\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Synchronoise",
		effect:
			"Inflicts regular damage.  Only Pokémon that share a type with the user will take damage from this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Electro Ball",
		effect:
			"Inflicts regular damage.  The greater the user’s Speed compared to the target’s, the higher power this move has, to a maximum of 150.\n\nUser’s Speed                     | Power\n-------------------------------- | ----:\nUp to 2× the target’s Speed      |    60\nUp to 3× the target’s Speed      |    80\nUp to 4× the target’s Speed      |   120\nMore than 4× the target’s Speed  |   150\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Soak",
		effect:
			"Changes the target to pure Water-type until it leaves the field.  If the target has Multitype, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flame Charge",
		effect: "Inflicts regular damage.  Raises the user’s Speed by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Coil",
		effect:
			"Raises the user’s Attack, Defense, and accuracy by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Low Sweep",
		effect: "Lowers the target’s Speed by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Acid Spray",
		effect:
			"Inflicts regular damage.  Lowers the target’s Special Defense by two stages.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Foul Play",
		effect:
			"Inflicts regular damage.  Damage is calculated using the target’s attacking stat rather than the user’s.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Simple Beam",
		effect: "Changes the target’s ability to Simple.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Entrainment",
		effect:
			"Changes the target’s ability to match the user’s.  This effect ends when the target leaves battle.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "After You",
		effect:
			"The target will act next this turn, regardless of Speed or move priority.\nIf the target has already acted this turn, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Round",
		effect:
			"Inflicts regular damage.  If Round has already been used this turn, this move’s power is doubled.  After this move is used, any other Pokémon using it this turn will immediately do so (in the order they would otherwise act), regardless of Speed or priority.  Pokémon using other moves will then continue to act as usual.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Echoed Voice",
		effect:
			"Inflicts regular damage.  If any friendly Pokémon used this move earlier this turn or on the previous turn, that use’s power is added to this move’s power, to a maximum of 200.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Chip Away",
		effect:
			"Inflicts regular damage.  Damage calculation ignores the target’s stat modifiers, including evasion.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Clear Smog",
		effect:
			"Inflicts regular damage.  All of the target’s stat modifiers are reset to zero.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stored Power",
		effect:
			"Inflicts regular damage.  Power is increased by 100% its original value for every stage any of the user’s stats have been raised.  Accuracy, evasion, and lowered stats do not affect this move’s power.  For a Pokémon with all five stats modified to +6, this move’s power is 31×.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Quick Guard",
		effect:
			"Moves with priority greater than 0 will not hit friendly Pokémon for the remainder of this turn.  If the user is last to act this turn, this move will fail.\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ally Switch",
		effect:
			"User switches position on the field with the friendly Pokémon opposite it.  If the user is in the middle position in a triple battle, or there are no other friendly Pokémon, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Scald",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was burned!",
	},
	{
		name: "Shell Smash",
		effect:
			"Raises the user’s Attack, Special Attack, and Speed by two stages each.  Lowers the user’s Defense and Special Defense by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Heal Pulse",
		effect: "Heals the target for half its max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hex",
		effect:
			"Inflicts regular damage.  If the target has a major status ailment, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sky Drop",
		effect:
			"Inflicts regular damage.  User carries the target high into the air for one turn, during which no moves will hit either Pokémon and neither can act.  On the following turn, the user drops the target, inflicting damage and ending the effect.\n\nIf the target is Flying-type, this move will function as normal but inflict no damage.\n\nGust, Hurricane, Sky Uppercut, Smack Down, Thunder, Twister, and Whirlwind can hit both the user and the target during this effect.  Gust and Twister will additionally have double power.\n\nThe damage from Hail and Sandstorm still applies during this effect.\n\nEither Pokémon may be hit during this effect if also under the effect of Lock-On, Mind Reader, or No Guard.\n\nThis move cannot be used while Gravity is in effect.\n\nThis move cannot be selected by Sleep Talk.\n\n*Bug*: If Gravity is used during a double or triple battle while this move is in effect, this move is not correctly canceled on the target, and it remains high in the air indefinitely.  As this move prevents the target from acting, the only way to subsequently remove it from the field is to faint it.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shift Gear",
		effect:
			"Raises the user’s Attack by one stage and its Speed by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Circle Throw",
		effect:
			"Inflicts regular damage, then switches the target out for another of its trainer’s Pokémon, selected at random.\n\nIf the target is under the effect of Ingrain or Suction Cups, or it has a Substitute, or its Trainer has no more usable Pokémon, it will not be switched out.  If the target is a wild Pokémon, the battle ends instead.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Incinerate",
		effect:
			"Inflicts regular damage.  If the target is holding a berry, it’s destroyed and cannot be used in response to this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Quash",
		effect:
			"Forces the target to act last this turn, regardless of Speed or move priority.  If the target has already acted this turn, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Acrobatics",
		effect:
			"Inflicts regular damage.  If the user has no held item, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Reflect Type",
		effect: "User’s type changes to match the target’s.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Retaliate",
		effect:
			"Inflicts regular damage.  If a friendly Pokémon fainted on the previous turn, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Final Gambit",
		effect: "Inflicts damage equal to the user’s remaining HP.  User faints.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bestow",
		effect:
			"Transfers the user’s held item to the target.  If the user has no held item, or the target already has a held item, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Inferno",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 50,
		effectChance: 100,
		narrative: "The target was burned!",
	},
	{
		name: "Water Pledge",
		effect:
			"Inflicts regular damage.  If a friendly Pokémon used Grass Pledge earlier this turn, all opposing Pokémon have halved Speed for four turns (including this one).",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fire Pledge",
		effect:
			"Inflicts regular damage.  If a friendly Pokémon used Water Pledge earlier this turn, moves used by any friendly Pokémon have doubled effect chance for four turns (including this one).",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Grass Pledge",
		effect:
			"Inflicts regular damage.  If a friendly Pokémon used Fire Pledge earlier this turn, all opposing Pokémon will take 1/8 their max HP in damage at the end of every turn for four turns (including this one).",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Volt Switch",
		effect:
			"Inflicts regular damage, then the user immediately switches out, and the trainer selects a replacement Pokémon from the party.  If the target faints from this attack, the user’s trainer selects the new Pokémon to send out first.  If the user is the last Pokémon in its party that can battle, it will not switch out.\n\nThe user may be hit by Pursuit when it switches out, if it has been targeted and Pursuit has not yet been used.\n\nThis move may be used even if the user is under the effect of Ingrain.  Ingrain’s effect will end.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Struggle Bug",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Bulldoze",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Frost Breath",
		effect: "Inflicts regular damage.  Always scores a critical hit.",
		accuracy: 90,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Dragon Tail",
		effect:
			"Inflicts regular damage, then switches the target out for another of its trainer’s Pokémon, selected at random.\n\nIf the target is under the effect of Ingrain or Suction Cups, or it has a Substitute, or its Trainer has no more usable Pokémon, it will not be switched out.  If the target is a wild Pokémon, the battle ends instead.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Work Up",
		effect: "Raises the user’s Attack and Special Attack by one stage each.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Electroweb",
		effect: "Lowers the target’s Speed by one stage.",
		accuracy: 95,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Wild Charge",
		effect:
			"Inflicts regular damage.  User takes 1/4 the damage it inflicts in recoil.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Drill Run",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dual Chop",
		effect: "Inflicts regular damage.  Hits twice in one turn.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Heart Stamp",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Horn Leech",
		effect:
			"Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Sacred Sword",
		effect:
			"Inflicts regular damage.  Damage calculation ignores the target’s stat modifiers, including evasion.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Razor Shell",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 95,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Heat Crash",
		effect:
			"Inflicts regular damage.  The greater the user’s weight compared to the target’s, the higher power this move has, to a maximum of 120.\n\nUser’s weight                    | Power\n-------------------------------- | ----:\nUp to 2× the target’s weight     |    40\nUp to 3× the target’s weight     |    60\nUp to 4× the target’s weight     |    80\nUp to 5× the target’s weight     |   100\nMore than 5× the target’s weight |   120\n",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Leaf Tornado",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 90,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Steamroller",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.\n\nPower is doubled against Pokémon that have used Minimize since entering the field.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Cotton Guard",
		effect: "Raises the user’s Defense by three stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Night Daze",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s accuracy by one stage.",
		accuracy: 95,
		effectChance: 40,
		narrative: null,
	},
	{
		name: "Psystrike",
		effect:
			"Inflicts regular damage.  Damage calculation always uses the target’s Defense, regardless of this move’s damage class.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tail Slap",
		effect:
			"Inflicts regular damage.  Hits 2–5 times in one turn.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hurricane",
		effect:
			"Inflicts regular damage.  Has a chance to confuse the target.\n\nThis move can hit Pokémon under the effect of Bounce, Fly, or Sky Drop.\n\nDuring Rain Dance, this move has 100% accuracy.  During Sunny Day, this move has 50% accuracy.",
		accuracy: 70,
		effectChance: 30,
		narrative: "The target became confused!",
	},
	{
		name: "Head Charge",
		effect:
			"Inflicts regular damage.  User takes 1/4 the damage it inflicts in recoil.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Gear Grind",
		effect: "Inflicts regular damage.  Hits twice in one turn.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Searing Shot",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was burned!",
	},
	{
		name: "Techno Blast",
		effect:
			"Inflicts regular damage.  If the user is holding a plate or a drive, this move’s type is the type corresponding to that item.\n\nNote: This effect is technically shared by both Techno Blast and Judgment; however, Techno Blast is only affected by drives, and Judgment is only affected by plates.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Relic Song",
		effect:
			"Inflicts regular damage.  Has a chance to put the target to sleep.\nIf the user is a Meloetta, it will toggle between Aria and Pirouette Forme.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target fell asleep!",
	},
	{
		name: "Secret Sword",
		effect:
			"Inflicts regular damage.  Damage calculation always uses the target’s Defense, regardless of this move’s damage class.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Glaciate",
		effect:
			"Inflicts regular damage.  Lowers the target’s Speed by one stage.",
		accuracy: 95,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Bolt Strike",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 85,
		effectChance: 20,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Blue Flare",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 85,
		effectChance: 20,
		narrative: "The target was burned!",
	},
	{
		name: "Fiery Dance",
		effect:
			"Inflicts regular damage.  Has a chance to raise the user’s Special Attack by one stage.",
		accuracy: 100,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Freeze Shock",
		effect:
			"Inflicts regular damage.  Has a chance to paralyze the target.  User charges for one turn before attacking.",
		accuracy: 90,
		effectChance: 30,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Ice Burn",
		effect:
			"Inflicts regular damage.  Has a chance to burn the target.  User charges for one turn before attacking.",
		accuracy: 90,
		effectChance: 30,
		narrative: "The target was burned!",
	},
	{
		name: "Snarl",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Attack by one stage.",
		accuracy: 95,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Icicle Crash",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 90,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "V Create",
		effect:
			"Inflicts regular damage.  Lowers the user’s Defense, Special Defense, and Speed by one stage each.",
		accuracy: 95,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Fusion Flare",
		effect:
			"Inflicts regular damage.  If a friendly Pokémon used Fusion Bolt earlier this turn, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fusion Bolt",
		effect:
			"Inflicts regular damage.  If a friendly Pokémon used Fusion Flare earlier this turn, this move has double power.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flying Press",
		effect:
			"Inflicts regular damage.  For the purposes of type effectiveness, this move is both Fighting- and Flying-type: its final effectiveness is determined by multiplying the effectiveness of each type against each of the target’s types.\n\nFor all other purposes, this move is pure Fighting-type.  If this move’s type is changed, its Fighting typing is overwritten, and its secondary type remains Flying.\n\nIf the target has used Minimize since entering battle, this move has double power and will never miss.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mat Block",
		effect:
			"Protects all friendly Pokémon from damaging moves.  Only works on the first turn after the user is sent out.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Belch",
		effect:
			"Inflicts regular damage.  Can only be used if the user has eaten a berry since the beginning of the battle.\n\nAfter the user eats a berry, it may use this move any number of times until the end of the battle, even if it switches out.  Eating a held berry, eating a berry via Bug Bite or Pluck, or being the target of a Flung berry will enable this move.  Feeding a Pokémon a berry from the bag or using Natural Gift will not.\n\nIf the trainer chooses this move when it cannot be used, the choice is rejected outright and the trainer must choose another move.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rototiller",
		effect:
			"Raises the Attack and Special Attack of all Grass Pokémon in battle.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Sticky Web",
		effect:
			"Shoots a web over the opponents’ side of the field, which lowers the Speed of any opposing Pokémon that enters the field by one stage.\n\nPokémon in the air, such as Flying-types and those with Levitate, are unaffected.  Rapid Spin removes Sticky Web from the user’s side of the field; Defog removes it from both sides.",
		accuracy: null,
		effectChance: null,
		narrative: "The user targeted the field!",
	},
	{
		name: "Fell Stinger",
		effect:
			"Inflicts regular damage.  Raises the user’s Attack by two stages if it KOs the target.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Phantom Force",
		effect:
			"Inflicts regular damage.  User vanishes for one turn, becoming immune to attack, and hits on the second turn.\n\nThis move ignores the effects of Detect and Protect.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Trick Or Treat",
		effect: "Adds Ghost to the target’s types.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Noble Roar",
		effect: "Lowers the target’s Attack and Special Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Ion Deluge",
		effect:
			"Changes all Pokémon’s Normal moves to Electric moves for the rest of the turn.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Parabolic Charge",
		effect: "Heals the user for half the total damage dealt to all targets.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Forests Curse",
		effect: "Adds Grass to the target’s types.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Petal Blizzard",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Freeze Dry",
		effect:
			"Inflicts regular damage.  This move is super-effective against the Water type.\n\nThe target’s other type will affect damage as usual.  If this move’s type is changed, it remains super-effective against Water regardless of its type.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Disarming Voice",
		effect: "Inflicts regular damage.  Ignores accuracy and evasion.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Parting Shot",
		effect:
			"Lowers all targets’ Attack and Special Attack by one stage.  Makes the user switch out.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Topsy Turvy",
		effect: "Inverts the target’s stat modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Draining Kiss",
		effect:
			"Deals regular damage.  Drains 75% of the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Crafty Shield",
		effect:
			"Protects all friendly Pokémon from non-damaging moves for the rest of the turn.\n\nUnlike other blocking moves, this move may be used consecutively without its chance of success falling.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flower Shield",
		effect: "Raises the Defense of all Grass Pokémon in battle.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Grassy Terrain",
		effect:
			"For five turns, heals all Pokémon on the ground for 1/16 their max HP each turn and strengthens their Grass moves to 1.5× their power.\n\nChanges Nature Power to Energy Ball.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Misty Terrain",
		effect:
			"For five turns, protects all Pokémon on the ground from major status ailments and confusion and weakens Dragon moves used against them to 0.5× their power.\n\nChanges Nature Power to Moonblast.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Electrify",
		effect:
			"Changes the target’s move’s type to Electric if it hasn’t moved yet this turn.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Play Rough",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Attack by one stage.",
		accuracy: 90,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Fairy Wind",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Moonblast",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Attack by one stage.",
		accuracy: 100,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Boomburst",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fairy Lock",
		effect:
			"Prevents all Pokémon from fleeing or switching out during the next turn.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Kings Shield",
		effect:
			"Blocks damaging attacks and lowers attacking Pokémon’s Attack by two stages on contact.  Switches Aegislash to Shield Forme.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Play Nice",
		effect: "Lowers the target’s Attack by one stage.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Confide",
		effect: "Lowers the target’s Special Attack by one stage.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Diamond Storm",
		effect:
			"Inflicts regular damage.  Has a chance to raise the user’s Defense by two stages for each target hit.",
		accuracy: 95,
		effectChance: 50,
		narrative: null,
	},
	{
		name: "Steam Eruption",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 95,
		effectChance: 30,
		narrative: "The target was burned!",
	},
	{
		name: "Hyperspace Hole",
		effect:
			"Inflicts regular damage.  Bypasses and removes any protection effect on the target.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Water Shuriken",
		effect: "Inflicts regular damage.  Hits 2–5 times.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mystical Fire",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Spiky Shield",
		effect:
			"Blocks damaging attacks and damages attacking Pokémon for 1/8 their max HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aromatic Mist",
		effect: "Raises a selected ally’s Special Defense by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Eerie Impulse",
		effect: "Lowers the target’s Special Attack by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Venom Drench",
		effect:
			"Lowers the target’s Attack, Special Attack, and Speed by one stage if it is poisoned.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target was poisoned!",
	},
	{
		name: "Powder",
		effect:
			"Explodes if the target uses a Fire move this turn, damaging it for 1/4 its max HP and preventing the move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Geomancy",
		effect:
			"Takes one turn to charge, then raises the user’s Special Attack, Special Defense, and Speed by two stages.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Magnetic Flux",
		effect:
			"Raises the Defense and Special Defense of all friendly Pokémon with Plus or Minus by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Happy Hour",
		effect:
			"Doubles prize money.\n\nStacks with a held item.  Only works once per battle.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Electric Terrain",
		effect:
			"For five turns, prevents all Pokémon on the ground from sleeping and strengthens their Electric moves to 1.5× their power.\n\nChanges Nature Power to Thunderbolt.",
		accuracy: null,
		effectChance: null,
		narrative: "The target fell asleep!",
	},
	{
		name: "Dazzling Gleam",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Celebrate",
		effect: "Does nothing.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hold Hands",
		effect: "Does nothing.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Baby Doll Eyes",
		effect: "Lowers the target’s Attack by one stage.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Nuzzle",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Hold Back",
		effect:
			"Inflicts regular damage.  Will not reduce the target’s HP below 1.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Infestation",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Power Up Punch",
		effect:
			"Inflicts regular damage.  Raises the user’s Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Oblivion Wing",
		effect:
			"Deals regular damage.  Drains 75% of the damage inflicted to heal the user.",
		accuracy: 100,
		effectChance: null,
		narrative: "The user drained the target's energy!",
	},
	{
		name: "Thousand Arrows",
		effect:
			"Inflicts regular damage.  Grounds the target until it leaves battle.  Ignores levitation effects and the immunity of Flying-type Pokémon.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Thousand Waves",
		effect: "Inflicts regular damage.  Traps the target.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lands Wrath",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Light Of Ruin",
		effect:
			"Inflicts regular damage.  User takes 1/2 the damage it inflicts in recoil.",
		accuracy: 90,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Origin Pulse",
		effect: "Inflicts regular damage.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Precipice Blades",
		effect: "Inflicts regular damage.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dragon Ascent",
		effect:
			"Inflicts regular damage, then lowers the user’s Defense and Special Defense by one stage each.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Hyperspace Fury",
		effect:
			"Inflicts regular damage.  Bypasses and removes any protection effect on the target.",
		accuracy: null,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Breakneck Blitz  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Breakneck Blitz  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "All Out Pummeling  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "All Out Pummeling  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Supersonic Skystrike  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Supersonic Skystrike  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Acid Downpour  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Acid Downpour  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tectonic Rage  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tectonic Rage  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Continental Crush  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Continental Crush  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Savage Spin Out  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Savage Spin Out  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Never Ending Nightmare  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Never Ending Nightmare  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Corkscrew Crash  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Corkscrew Crash  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Inferno Overdrive  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Inferno Overdrive  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hydro Vortex  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hydro Vortex  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bloom Doom  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bloom Doom  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gigavolt Havoc  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gigavolt Havoc  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shattered Psyche  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shattered Psyche  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Subzero Slammer  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Subzero Slammer  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Devastating Drake  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Devastating Drake  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Black Hole Eclipse  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Black Hole Eclipse  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Twinkle Tackle  Physical",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Twinkle Tackle  Special",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Catastropika",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shore Up",
		effect:
			"Heals the user for ½ its max HP.  During a Sandstorm, the healing is increased to ⅔.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "First Impression",
		effect:
			"Inflicts regular damage. Can only be used on the user’s first turn after entering the field.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Baneful Bunker",
		effect:
			"Grants the user protection for the rest of the turn.  If a Pokémon attempts to use a move that makes contact with the user, that Pokémon will be poisoned.  This move’s chance of success halves every time it’s used consecutively with any other protection move.",
		accuracy: null,
		effectChance: null,
		narrative: "The target was poisoned!",
	},
	{
		name: "Spirit Shackle",
		effect: "Inflicts regular damage.  Traps the target.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target can no longer escape!",
	},
	{
		name: "Darkest Lariat",
		effect:
			"Inflicts regular damage.  Damage calculation ignores the target’s stat modifiers, including evasion.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sparkling Aria",
		effect:
			"Inflicts regular damage.  If the target has a burn and takes damage from this move, its burn is healed.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target was burned!",
	},
	{
		name: "Ice Hammer",
		effect:
			"Inflicts regular damage, then lowers the user’s Speed by one stage.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Floral Healing",
		effect:
			"Heals the target for ½ its max HP.  If Grassy Terrain is in effect, heals for ⅔ instead.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "High Horsepower",
		effect: "Inflicts regular damage.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Strength Sap",
		effect:
			"Lowers the target’s Attack by one stage.  Heals the user by the target’s current Attack, including modifiers, but not including this move’s Attack-lowering effect.\n\nIf the target’s Attack is already at -6, this move will fail.  In any other situation that would prevent a stat modification, the healing will still succeed.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Solar Blade",
		effect:
			"Inflicts regular damage.  User charges for one turn before attacking.\n\nDuring Sunny Day, the charge turn is skipped.\n\nDuring Hail, Rain Dance, or Sandstorm, power is halved.\n\nThis move cannot be selected by Sleep Talk.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Leafage",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spotlight",
		effect:
			"For the duration of the turn, if the target is also a valid target for a move used by one of its opponents, that move will target it instead.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Toxic Thread",
		effect: "Poisons the target and lowers its Speed by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target was poisoned!",
	},
	{
		name: "Laser Focus",
		effect: "The user’s next move will result in a critical hit.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gear Up",
		effect:
			"Raises the Attack and Special Attack of all friendly Pokémon with Plus or Minus by one stage.",
		accuracy: null,
		effectChance: null,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Throat Chop",
		effect:
			"Inflicts regular damage.  Silences the target for two turns, preventing it from using any sound-based moves.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Pollen Puff",
		effect:
			"If the target is an opponent, inflicts regular damage.  If the target is an ally, heals the target for 50% of its max HP.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Anchor Shot",
		effect: "Inflicts regular damage.  Traps the target.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target can no longer escape!",
	},
	{
		name: "Psychic Terrain",
		effect:
			"Changes the terrain to Psychic Terrain for 5 turns.  Overrides Electric Terrain, Grassy Terrain, and Misty Terrain.\n\nAll Pokémon on the ground are immune to moves with priority greater than 0.  (Moves that target the field rather than individual Pokémon, such as Spikes, are not affected.)  Additionally, when a Pokémon on the ground uses a Psychic-type move, that move’s power is increased to 1.5×.\n\nIf a Pokémon is holding a Terrain Extender when creating Psychic Terrain (by any means), the effect lasts for 8 turns instead of 5.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lunge",
		effect:
			"Inflicts regular damage.  Lowers the target’s Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Fire Lash",
		effect:
			"Inflicts regular damage.  Lowers the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Power Trip",
		effect:
			"Inflicts regular damage.  Power is increased by 100% its original value for every stage any of the user’s stats have been raised.  Accuracy, evasion, and lowered stats do not affect this move’s power.  For a Pokémon with all five stats modified to +6, this move’s power is 31×.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Burn Up",
		effect:
			"Inflicts regular damage.  Removes the user’s Fire type after damage calculation.  If the user is not Fire-type, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Speed Swap",
		effect: "Exchanges the original Speed stats of the user and target.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Smart Strike",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Purify",
		effect:
			"Cures the target of its major status ailment and heals the user for 50% of its max HP.  If the target has no major status ailment, this move will fail.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Revelation Dance",
		effect:
			"Inflicts regular damage.  This move’s type matches the user’s first type, if any; otherwise, it’s typeless.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Core Enforcer",
		effect:
			"Inflicts regular damage.  If the target has already moved this turn, its ability is nullified.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Trop Kick",
		effect:
			"Inflicts regular damage.  Lowers the target’s Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Instruct",
		effect:
			"The target immediately uses its most recently-used move.  This is independent of the target’s normal action for the turn (i.e., it may end up moving twice), but otherwise functions as usual, including deduction of PP.  This effect works for disabled moves and ignores Torment.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Beak Blast",
		effect:
			"Begins charging at the start of the turn, then attacks as normal.  Any Pokémon that makes contact with the user while charging is burned.  The charging is not affected by accuracy, sleep, paralysis, or any other effect that would interfere with a move.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target was burned!",
	},
	{
		name: "Clanging Scales",
		effect:
			"Inflicts regular damage.  Lowers the user’s Defense by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Dragon Hammer",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Brutal Swing",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aurora Veil",
		effect:
			"Places the Aurora Veil effect on the user’s side of the field for the next 5 turns.  If the weather is not Hail, or the weather is disabled by the effects of Cloud Nine or Air Lock, this move will fail.\n\nAny regular damage dealt to an affected Pokémon is reduced by ½.  (If there are multiple Pokémon on the affected field, the reduction is ⅓.)",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sinister Arrow Raid",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Malicious Moonsault",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Oceanic Operetta",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Guardian Of Alola",
		effect: "Inflicts direct damage equal to ¾ of the target’s remaining HP.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Soul Stealing 7 Star Strike",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stoked Sparksurfer",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Pulverizing Pancake",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Extreme Evoboost",
		effect:
			"Raises the user’s Attack, Defense, Special Attack, Special Defense, and Speed by two stages each.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target's stats were raised!",
	},
	{
		name: "Genesis Supernova",
		effect:
			"Inflicts regular damage, then (if successful) changes the terrain to Psychic Terrain.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shell Trap",
		effect:
			"Inflicts regular damage.  If the user was not yet hit by an opponent’s physical move this turn, this move will fail.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fleur Cannon",
		effect:
			"Inflicts regular damage, then lowers the user’s Special Attack by two stages.",
		accuracy: 90,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Psychic Fangs",
		effect:
			"Destroys any Light Screen or Reflect on the target’s side of the field, then inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stomping Tantrum",
		effect:
			'Inflicts regular damage.  Power is doubled if the user’s last move failed for any reason (i.e., produced the message "But it failed!") or was ineffective due to types.',
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Bone",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Accelerock",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Liquidation",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Prismatic Laser",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spectral Thief",
		effect:
			"Steals the target’s stat increases, then inflicts regular damage.  Will not steal stat increases that would put any of the user’s stats at more than +6; any excess is left on the target.  Stolen increases are affected by abilities as normal.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sunsteel Strike",
		effect:
			"Inflicts regular damage.  Other Pokémon’s abilities cannot activate in response to this move.  In particular, it hits through Disguise",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Moongeist Beam",
		effect:
			"Inflicts regular damage.  Other Pokémon’s abilities cannot activate in response to this move.  In particular, it hits through Disguise",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tearful Look",
		effect:
			"Lowers the target’s Attack and Special Attack by one stage each.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Zing Zap",
		effect:
			"Inflicts regular damage.  Has a chance to make the target flinch.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target flinched!",
	},
	{
		name: "Natures Madness",
		effect:
			"Inflicts typeless damage equal to half the target’s remaining HP.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Multi Attack",
		effect:
			"Inflicts regular damage.  If the user is holding a plate or a drive, this move’s type is the type corresponding to that item.\n\nNote: This effect is technically shared by both Techno Blast and Judgment; however, Techno Blast is only affected by drives, and Judgment is only affected by plates.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "10 000 000 Volt Thunderbolt",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mind Blown",
		effect:
			"Inflicts damage, and the user takes damage equal to half of its max HP, rounded up. The user still takes damage if the move is blocked by Protect or Substitute, misses, or if the target has Flash Fire.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Plasma Fists",
		effect:
			"After inflicting damage, all Normal-type moves become Electric-type for the remainder of the turn, including status moves. This effect is applied after move type-changing abilities, such as Pixilate and Normalize.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Photon Geyser",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Light That Burns The Sky",
		effect:
			"Inflicts damage using either Attack or Special Attack stat, whichever is higher. Determining which stat is used takes into account stat changes but not held items or abilities.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Searing Sunraze Smash",
		effect:
			"Inflicts regular damage.  Other Pokémon’s abilities cannot activate in response to this move.  In particular, it hits through Disguise",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Menacing Moonraze Maelstrom",
		effect:
			"Inflicts regular damage.  Other Pokémon’s abilities cannot activate in response to this move.  In particular, it hits through Disguise",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lets Snuggle Forever",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Splintered Stormshards",
		effect:
			"Inflicts damage and removes any terrain present on the battlefield.",
		accuracy: null,
		effectChance: null,
		narrative: "The user targeted the field!",
	},
	{
		name: "Clangorous Soulblaze",
		effect:
			"Inflicts sound-based damage to all opposing Pokémon and increases the user’s Attack, Defense, Special Attack, Special Defense, and Speed by one stage each. The user’s stats are not raised if the move fails to damage any opposing Pokémon.",
		accuracy: null,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Zippy Zap",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Splishy Splash",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Floaty Fall",
		effect: "Inflicts regular damage.",
		accuracy: 95,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Pika Papow",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bouncy Bubble",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Buzzy Buzz",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Sizzly Slide",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Glitzy Glow",
		effect: "Inflicts regular damage.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Baddy Bad",
		effect: "Inflicts regular damage.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sappy Seed",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Freezy Frost",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sparkly Swirl",
		effect: "Inflicts regular damage.",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Veevee Volley",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Double Iron Bash",
		effect: "Inflicts regular damage.  Hits twice in one turn.",
		accuracy: 100,
		effectChance: 30,
		narrative: null,
	},
	{
		name: "Max Guard",
		effect:
			"No moves will hit the user for the remainder of this turn.  If the user is last to act this turn, this move will fail.\n\nIf the user successfully used Detect, Endure, Protect, Quick Guard, or Wide Guard on the last turn, this move has a 50% chance to fail.\n\nLock-On, Mind Reader, and No Guard provide a (100 – accuracy)% chance for moves to break through this move.  This does not apply to one-hit KO moves (Fissure, Guillotine, Horn Drill, and Sheer Cold); those are always blocked by this move.\n\nThunder during Rain Dance and Blizzard during Hail have a 30% chance to break through this move.\n\nThe following effects are not prevented by this move:\n\n* Acupressure from an ally\n* Curse’s curse effect\n* Delayed damage from Doom Desire and Future Sight; however, these moves will be prevented if they are used this turn\n* Feint, which will also end this move’s protection after it hits\n* Imprison\n* Perish Song\n* Shadow Force\n* Moves that merely copy the user, such as Transform or Psych Up\n\nThis move cannot be selected by Assist or Metronome.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dynamax Cannon",
		effect:
			"The user unleashes a strong beam from its core. This move deals twice the damage if the target is Dynamaxed.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Snipe Shot",
		effect:
			"The user ignores the effects of opposing Pokémon's moves and Abilities that draw in moves, allowing this move to hit the chosen target.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Jaw Lock",
		effect:
			"Inflicts regular damage, then (if successful) sets Leech Seed on the target.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stuff Cheeks",
		effect:
			"Inflicts regular damage, then (if successful) removes major status effects from every Pokémon in the user’s party.",
		accuracy: null,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "No Retreat",
		effect:
			"Inflicts regular damage.  Hits twice in one turn, with a chance to make the target flinch.",
		accuracy: null,
		effectChance: 100,
		narrative: "The target flinched!",
	},
	{
		name: "Tar Shot",
		effect: "",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Magic Powder",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dragon Darts",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Teatime",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Octolock",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bolt Beak",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fishious Rend",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Court Change",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Flare",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Flutterby",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Lightning",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Strike",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Knuckle",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Phantasm",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Hailstorm",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Ooze",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Geyser",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Airstream",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Starfall",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Wyrmwind",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Mindstorm",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Rockfall",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Quake",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Darkness",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Overgrowth",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Max Steelspike",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Clangorous Soul",
		effect: "",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Body Press",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Decorate",
		effect: "",
		accuracy: null,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Drum Beating",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Speed by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Snap Trap",
		effect:
			"Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nRapid Spin cancels this effect.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Pyro Ball",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 90,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Behemoth Blade",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Behemoth Bash",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aura Wheel",
		effect: "",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Breaking Swipe",
		effect:
			"Inflicts regular damage.  Lowers the target’s Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Branch Poke",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Overdrive",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Apple Acid",
		effect: "",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Grav Apple",
		effect:
			"Inflicts regular damage.  Lowers the target’s Defense by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: "The target's stats fell!",
	},
	{
		name: "Spirit Break",
		effect:
			"Inflicts regular damage.  Has a chance to lower the target’s Special Attack by one stage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Strange Steam",
		effect: "Inflicts regular damage.  Has a chance to confuse the target.",
		accuracy: 95,
		effectChance: 20,
		narrative: "The target became confused!",
	},
	{
		name: "Life Dew",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Obstruct",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "False Surrender",
		effect:
			"Inflicts regular damage.  Ignores accuracy and evasion modifiers.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Meteor Assault",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Eternabeam",
		effect:
			'Inflicts regular damage.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Steel Beam",
		effect:
			"Inflicts damage, and the user takes damage equal to half of its max HP, rounded up. The user still takes damage if the move is blocked by Protect or Substitute, misses, or if the target has Flash Fire.",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Expanding Force",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Steel Roller",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Scale Shot",
		effect:
			"Inflicts regular damage two to five times in a row, raising the user’s Speed and lowering the user’s Defense by one stage each upon last hit.",
		accuracy: 90,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Meteor Beam",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Shell Side Arm",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Misty Explosion",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Grassy Glide",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rising Voltage",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Terrain Pulse",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Skitter Smack",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Burning Jealousy",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Lash Out",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Poltergeist",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Corrosive Gas",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Coaching",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Flip Turn",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Triple Axel",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dual Wingbeat",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Scorching Sands",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 30,
		narrative: "The target was burned!",
	},
	{
		name: "Jungle Healing",
		effect: "Inflicts regular damage.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wicked Blow",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Surging Strikes",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Thunder Cage",
		effect: "Inflicts regular damage.",
		accuracy: 90,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Dragon Energy",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Freezing Glare",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 10,
		narrative: null,
	},
	{
		name: "Fiery Wrath",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 20,
		narrative: null,
	},
	{
		name: "Thunderous Kick",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: 100,
		narrative: null,
	},
	{
		name: "Glacial Lance",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Astral Barrage",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Eerie Spell",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dire Claw",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psyshield Bash",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Power Shift",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Stone Axe",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Springtide Storm",
		effect: "",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mystical Power",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Raging Fury",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wave Crash",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Chloroblast",
		effect: "",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mountain Gale",
		effect: "",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Victory Dance",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Headlong Rush",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Barb Barrage",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Esper Wing",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bitter Malice",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shelter",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Triple Arrows",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Infernal Parade",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ceaseless Edge",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bleakwind Storm",
		effect: "",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wildbolt Storm",
		effect: "",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Sandsear Storm",
		effect: "",
		accuracy: 80,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lunar Blessing",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Take Heart",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tera Blast",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Silk Trap",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Axe Kick",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Last Respects",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Lumina Crash",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Order Up",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Jet Punch",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spicy Extract",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Spin Out",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Population Bomb",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ice Spinner",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Glaive Rush",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Revival Blessing",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Salt Cure",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Triple Dive",
		effect: "",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mortal Spin",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Doodle",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fillet Away",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Kowtow Cleave",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Flower Trick",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Torch Song",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aqua Step",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Raging Bull",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Make It Rain",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psyblade",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hydro Steam",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ruination",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Collision Course",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Electro Drift",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shed Tail",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Chilly Reception",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tidy Up",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Snowscape",
		effect: "",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Pounce",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Trailblaze",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Chilling Water",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hyper Drill",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Twin Beam",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Rage Fist",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Armor Cannon",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Bitter Blade",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Double Shock",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Gigaton Hammer",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Comeuppance",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Aqua Cutter",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Blazing Torque",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Wicked Torque",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Noxious Torque",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Combat Torque",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Magical Torque",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Blood Moon",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Matcha Gotcha",
		effect: "",
		accuracy: 90,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Syrup Bomb",
		effect: "",
		accuracy: 85,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Ivy Cudgel",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Electro Shot",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tera Starstorm",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Fickle Beam",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Burning Bulwark",
		effect: "",
		accuracy: 0,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Thunderclap",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Mighty Cleave",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Tachyon Cutter",
		effect: "",
		accuracy: 0,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Hard Press",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Dragon Cheer",
		effect: "",
		accuracy: 0,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Alluring Voice",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Temper Flare",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Supercell Slam",
		effect: "",
		accuracy: 95,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Psychic Noise",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Upper Hand",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Malignant Chain",
		effect: "",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Rush",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move while in hyper mode.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Blast",
		effect:
			"Inflicts regular damage.  User’s critical hit rate is one level higher when using this move.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Blitz",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Bolt",
		effect: "Inflicts regular damage.  Has a chance to paralyze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target is paralyzed! It may be unable to move!",
	},
	{
		name: "Shadow Break",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Chill",
		effect: "Inflicts regular damage.  Has a chance to freeze the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was frozen solid!",
	},
	{
		name: "Shadow End",
		effect:
			"Inflicts regular damage.  User takes 1/2 of its current HP in recoil.",
		accuracy: 60,
		effectChance: null,
		narrative: "The user was hurt by recoil!",
	},
	{
		name: "Shadow Fire",
		effect: "Inflicts regular damage.  Has a chance to burn the target.",
		accuracy: 100,
		effectChance: 10,
		narrative: "The target was burned!",
	},
	{
		name: "Shadow Rave",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Storm",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Wave",
		effect: "Inflicts regular damage.",
		accuracy: 100,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Down",
		effect: "Lowers the target’s Defense by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Shadow Half",
		effect:
			'Halves HP of all Pokémon on the field.  User loses its next turn to "recharge", and cannot attack or switch out during that turn.',
		accuracy: 100,
		effectChance: null,
		narrative: "The user targeted the field!",
	},
	{
		name: "Shadow Hold",
		effect:
			"The target cannot switch out normally.  Ignores accuracy and evasion modifiers.  This effect ends when the user leaves the field.\n\nThe target may still escape by using Baton Pass, U-turn, or a Shed Shell.\n\nBoth the user and the target pass on this effect with Baton Pass.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Mist",
		effect: "Lowers the target’s evasion by two stages.",
		accuracy: 100,
		effectChance: null,
		narrative: "The target's stats fell!",
	},
	{
		name: "Shadow Panic",
		effect: "Confuses the target.",
		accuracy: 90,
		effectChance: null,
		narrative: "The target became confused!",
	},
	{
		name: "Shadow Shed",
		effect: "Removes the effects of Light Screen, Reflect, and Safeguard.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
	{
		name: "Shadow Sky",
		effect:
			"Changes the weather to Shadow Sky for five turns.  Pokémon other than Shadow Pokémon take 1/16 their max HP at the end of every turn.  This move is typeless for the purposes of Weather Ball.",
		accuracy: null,
		effectChance: null,
		narrative: null,
	},
];
