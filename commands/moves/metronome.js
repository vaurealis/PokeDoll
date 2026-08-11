const { SlashCommandBuilder } = require("discord.js");

// module.exports is how you export data in Node.js so that you can require() it in other files.
module.exports = {
	data: new SlashCommandBuilder()
		.setName("metronome")
		.setDescription(
			"The user waggles its finger, triggering a move.There is no telling what will happen.",
		),
	async execute(interaction) {
		await interaction.reply("Tick-tock!");
	},
};
