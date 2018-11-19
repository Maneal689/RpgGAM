/*
 * TODOlist
 * [x] Player object with c_map attribute
 * [ ] Player registration with registration cmd
 * [ ] Disable access to non-registered players to all the channels except registration one
 * [ ] Change the current c_map attribute of the player when entering a command on a specific channel
 *
 */
const Discord = require("discord.js");
const client = new Discord.Client();
const maps = require("./Map.js");

client.on("ready", function () {
    console.log("Logged in as " + client.user.tag + "!");
    console.log("Moi: " + client.user.id);
});

client.on("message", function (msg) {
    let c_chan = msg.channel.name;
    let author = msg.author.username;
    if (author !== client.user.username) {
        maps[c_chan].parse(msg);
    }
});

client.login("NTEzODM0NzM5NTg5NzA5ODI2.DtR6JA.aah0hBWhvr-0z_Plb_f2EymrVDA");
