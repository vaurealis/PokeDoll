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

	// Fiekd Targeting
	field: "The user targeted the field!",

	// Stat Changes (Decreases)
	lowers: "The target's stats fell!",

	// Stat Changes (Increases - for moves that buff the user)
	raises: "The target's stats were raised!",

	// Miscellaneous Effects
	recoil: "The user was hurt by recoil!",
	drains: "The user drained the target's energy!",
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
			const shortEffectText = effectEntry
				? effectEntry.short_effect.toLowerCase()
				: "";
			const longEffectText = effectEntry ? effectEntry.effect : "";

			// 2. Identify the narrative flavor
			let narrative = null;
			for (const [key, text] of Object.entries(statusMap)) {
				if (shortEffectText.includes(key)) {
					narrative = text;
					break;
				}
			}

			moveData.push({
				name: cleanName,
				effect: longEffectText,
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
