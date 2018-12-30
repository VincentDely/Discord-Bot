const Discord = require('discord.js');
const fs = require('fs');
const requirement = ' ';

const TOKEN = "INSÉRER LE TOKEN DE VOTRE BOT";

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log("@ Le bot attend vos instructions.");
})

bot.on('message', message => {
	if (!(message.author.id === "279493399248240640")) return;

	if (message.content.includes(requirement)) {
		
		var embed = new Discord.RichEmbed()
		.setColor(0x0A74D3)
    .setDescription(message.content)
		
		//Ici le bot va tout simplement renvoyer un message de type Embed
    //dont il est l'auteur.
		
    message.channel.send(embed);
	}
})

bot.login(TOKEN);
