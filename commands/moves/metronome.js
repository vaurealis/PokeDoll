const { SlashCommandBuilder } = require("discord.js");
const moves = require("./data/metronomeMoves.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("metronome")
		.setDescription("The user waggles its finger, triggering a move."),

	async execute(interaction) {
		const move = moves[Math.floor(Math.random() * moves.length)];
		const user = interaction.member.displayName;

		// 1. Accuracy Check
		if (move.accuracy !== null) {
			const hitRoll = Math.floor(Math.random() * 100) + 1;
			if (hitRoll > move.accuracy) {
				return await interaction.reply(
					`${interaction.user} used **${move.name}**, but it missed!`,
				);
			}
		}

		// 2. Secondary Effect Check
		let effectHappened = false;
		if (move.effectChance === null && move.narrative) {
			effectHappened = true;
		} else if (move.narrative) {
			const effectRoll = Math.floor(Math.random() * 100) + 1;
			if (effectRoll <= move.effectChance) {
				effectHappened = true;
			}
		}

		// 3. Final Output
		let response = `${interaction.user} used **${move.name}**!\n*${move.effect}*`;
		if (effectHappened) {
			response += `\n✦ ${move.narrative}`;
		}

		await interaction.reply(response);
	},
};
