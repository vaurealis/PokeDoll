const axios = require("axios");
const fs = require("fs");

const statusMap = {
	// Persistent Status Conditions
	burn: "The target was burned!",
	paralyze: "The target is paralyzed! It may be unable to move!",
	poison: "The target was poisoned!",
	freeze: "The target was frozen solid!",
	sleep: "The target fell asleep!",

	// Volatile Status / Flinch
	confuse: "The target became confused!",
	flinch: "The target flinched!",
	infatuate: "The target fell in love!",
	curse: "The target was cursed!",
	nightmare: "The target is locked in a nightmare!",

	// Stat Changes (Decreases)
	"lower the target's attack": "The target's Attack fell!",
	"lower the target's defense": "The target's Defense fell!",
	"lower the target's speed": "The target's Speed fell!",
	"lower the target's sp. atk": "The target's Sp. Atk fell!",
	"lower the target's sp. def": "The target's Sp. Def fell!",
	"lower the target's accuracy": "The target's Accuracy fell!",
	"lower the target's evasion": "The target's Evasion fell!",

	"lower the target's attack by two stages":
		"The target's Attack harshly fell!",
	"lower the target's defense by two stages":
		"The target's Defense harshly fell!",
	"lower the target's speed by two stages": "The target's Speed harshly fell!",
	"lower the target's sp. atk by two stages":
		"The target's Sp. Atk harshly fell!",
	"lower the target's sp. def by two stages":
		"The target's Sp. Def harshly fell!",
	"lower the target's accuracy by two stages":
		"The target's Accuracy harshly fell!",
	"lower the target's evasion by two stages":
		"The target's Evasion harshly fell!",

	// Stat Changes (Increases - for moves that buff the user)
	"raise the user's attack": "The user's Attack raised!",
	"raise the user's defense": "The user's Defense raised!",
	"raise the user's speed": "The user's Speed raised!",
	"raise the user's sp. atk": "The user's Sp. Atk raised!",
	"raise the user's sp. def": "The user's Sp. Def raised!",
	"raise the user's accuracy": "The user's Accuracy raised!",
	"raise the user's evasion": "The user's Evasion raised!",

	"raise the user's attack by two stages": "The user's Attack sharply raised!",
	"raise the user's defense by two stages":
		"The user's Defense sharply raised!",
	"raise the user's speed by two stages": "The user's Speed sharply raised!",
	"raise the user's sp. atk by two stages":
		"The user's Sp. Atk sharply raised!",
	"raise the user's sp. def by two stages":
		"The user's Sp. Def sharply raised!",
	"raise the user's accuracy by two stages":
		"The user's Accuracy sharply raised!",
	"raise the user's evasion by two stages":
		"The user's Evasion sharply raised!",

	// Miscellaneous Effects
	recoil: "The user was hurt by recoil!",
	vampiric: "The user drained the target's energy!",
	"critical hit": "A critical hit!",
	trap: "The target can no longer escape!",
};

async function syncMoves() {
	console.log("Fetching move list...");
	const listResponse = await axios.get(
		"https://pokeapi.co/api/v2/move?limit=1000",
	);
	const allMoves = listResponse.data.results;
	const moveData = [];

	for (const move of allMoves) {
		try {
			const detail = await axios.get(move.url);
			const cleanName = move.name
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");

			// 1. Get the effect text to "scan" it
			const effectEntry = detail.data.effect_entries.find(
				(e) => e.language.name === "en",
			);
			const effectText = effectEntry
				? effectEntry.short_effect.toLowerCase()
				: "";

			// 2. Identify the narrative flavor
			let narrative = null;
			for (const [key, text] of Object.entries(statusMap)) {
				if (effectText.includes(key)) {
					narrative = text;
					break;
				}
			}

			moveData.push({
				name: cleanName,
				accuracy: detail.data.accuracy,
				effectChance: detail.data.effect_chance,
				narrative: narrative, // This is our "Active Narrative"
			});

			if (moveData.length % 100 === 0)
				console.log(`Synced ${moveData.length} moves...`);
		} catch (e) {
			console.error(`Failed ${move.name}`);
		}
	}

	const content = `module.exports = ${JSON.stringify(moveData, null, "\t")};`;
	fs.writeFileSync("./commands/moves/data/metronomeMoves.js", content);
	console.log("Sync complete! Moves are now categorized.");
}

syncMoves();
