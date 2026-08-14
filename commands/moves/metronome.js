const { SlashCommandBuilder } = require("discord.js");
const moves = require("./data/metronomeMoves.js");

function getRandomResponse(list) {
	return list[Math.floor(Math.random() * list.length)];
}

// module.exports is how you export data in Node.js so that you can require() it in other files.
module.exports = {
	data: new SlashCommandBuilder()
		.setName("metronome")
		.setDescription(
			"The user waggles its finger, triggering a move.There is no telling what will happen.",
		),
	async execute(interaction) {
		// 1. Pick a random move object
		const selectedMove = moves[Math.floor(Math.random() * moves.length)];
		const user = interaction.member.displayName;

		// 2. Determine if it hits
		// If accuracy is null (like Swift or Protect), it always hits.
		// Otherwise, roll a random number between 1 and 100.
		let resultMessage = "";

		if (selectedMove.accuracy === null || selectedMove.accuracy === 100) {
			resultMessage = `**${user}** used **${selectedMove.name}**!`;
		} else {
			const roll = Math.floor(Math.random() * 100) + 1;
			if (roll <= selectedMove.accuracy) {
				resultMessage = `**${user}** used **${selectedMove.name}**!`;
			} else {
				resultMessage = `**${user}** tried to use **${selectedMove.name}**, but it missed!`;
			}
		}
		await interaction.reply(resultMessage);
	},
};
