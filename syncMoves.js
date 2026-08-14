const axios = require("axios");
const fs = require("fs");

async function syncMoves() {
	console.log("Fetching moves...");
	const response = await axios.get(
		"https://pokeapi.co/api/v2/move?limit=1000",
	);
	const moveNames = response.data.results.map((move) => {
		// capitalize and replace hyphens with spaces for better display
		return move.name
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	});

	const content = `module.exports = ${JSON.stringify(moveNames, null, "\t")};`;

	fs.writeFileSync("./commands/moves/data/metronomeMoves.js", content);
	console.log(`Successfully synced ${moveNames.length} moves!`);
}

syncMoves();
