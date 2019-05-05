const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help")
    console.log("Connectedç")
})

bot.login("NTc0NjMwNTU0MDA4NDIwMzky.XM8MoA.x0kEkdhwDRIcN9okVIGU7Vkzkuk");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("liste des commande: \n -*help");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :) :joy:")
        console.log("Commande Salut effectué")
        }
})
