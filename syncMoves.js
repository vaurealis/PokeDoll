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

	// Stat Changes (Increases - for moves that buff the user)
	"raises the user's attack": "The user's Attack rose!",
	"raises the user's defense": "The user's Defense rose!",
	"raises the user's speed": "The user's Speed rose!",

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
