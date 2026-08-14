const axios = require("axios");
const fs = require("fs");

async function syncMoves() {
	console.log("Fetching move list...");
	const listResponse = await axios.get(
		"https://pokeapi.co/api/v2/move?limit=1000",
	);
	const allMoves = listResponse.data.results;

	const moveData = [];
	console.log(
		`Found ${allMoves.length} moves. Fetching details (this may take a minute)...`,
	);

	// We loop through each move to get its specific accuracy
	for (const move of allMoves) {
		try {
			const detail = await axios.get(move.url);

			// Clean up the name (Extreme Speed instead of extreme-speed)
			const cleanName = move.name
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");

			moveData.push({
				name: cleanName,
				accuracy: detail.data.accuracy, // This will be a number (e.g. 80) or null (for moves that never miss)
			});

			if (moveData.length % 50 === 0)
				console.log(`Synced ${moveData.length} moves...`);
		} catch (e) {
			console.error(`Failed to fetch ${move.name}`);
		}
	}

	const content = `module.exports = ${JSON.stringify(moveData, null, "\t")};`;
	fs.writeFileSync("./commands/moves/data/metronomeMoves.js", content);
	console.log("Sync complete!");
}

syncMoves();
