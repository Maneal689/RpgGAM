const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", function () {
    console.log("Logged in as " + client.user.tag + "!");
    console.log("Moi: " + client.user.id);
});

client.on("message", function (msg) {
    console.log("Message reçu: " + msg + "\nDe: " + msg.author);
    msg.reply("Hellow!");
});

client.login("NTEzODM0NzM5NTg5NzA5ODI2.DtN06Q.7K5fD9J8TGN6KxC4hFadY8BuO84");
