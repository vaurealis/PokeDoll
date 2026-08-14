// The fs module is Node's native file system module. fs is used to read the commands directory and identify our command files
const fs = require("node:fs");
// The path module is Node's native path utility module. path helps construct paths to access files and directories.
const path = require("node:path");
// The Collection class extends JavaScript's native Map class, and includes more extensive, useful functionality.
const {
	Client,
	Collection,
	Events,
	GatewayIntentBits,
	MessageFlags,
} = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.commands = new Collection();

/*
First, path.join() helps to construct a path to the commands directory.
The first fs.readdirSync() method then reads the path to the directory and returns an array of all the folder names it contains, currently ['utility'].
The second fs.readdirSync() method reads the path to this directory and returns an array of all the file names they contain, currently ['ping.js', 'server.js', 'user.js'].
To ensure only command files get processed, Array.filter() removes any non-JavaScript files from the array.

With the correct files identified, the last step is dynamically set each command into the client.commands Collection.
For each file being loaded, check that it has at least the data and execute properties.
This helps to prevent errors resulting from loading empty, unfinished, or otherwise incorrect command files while you're still developing.
*/
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs
		.readdirSync(commandsPath)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ("data" in command && "execute" in command) {
			client.commands.set(command.data.name, command);
		} else
			console.log(
				`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
			);
	}
}

// To respond to a command, you need to create a listener for the interactionCreate event that will execute code when your application receives an interaction.
client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(
			`No command matching ${interaction.commandName} was found.`,
		);
		return;
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({
				content: "There was an error while executing this command!",
				flags: MessageFlags.Ephemeral,
			});
		} else {
			await interaction.reply({
				content: "There was an error while executing this command!",
				flags: MessageFlags.Ephemeral,
			});
		}
	}
});

// Log in to Discord with your client's token
client.login(token);
