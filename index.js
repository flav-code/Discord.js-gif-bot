const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const config = require("./config.json");

client.once("ready", () => {
    console.log(`${client.user.tag} is ready on ${client.guilds.cache.size} servers !`);
});

client.on("guildMemberUpdate", async (oldMember, newMember) => {

    const channel = await client.channels.fetch(config.channel_id).catch(() => null);
    if (!channel) return;

    const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`**${newMember.user.tag}**`)
    .setImage(newMember.user.displayAvatarURL({ dynamic: true }));channel.send(embed);
})

client.login(config.token);
