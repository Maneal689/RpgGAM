//function execute(cmd, args, msgObj, map) {
    //c_map = map;
    //Commands[cmd](args, msgObj);
//}

function Command(name, help = null, func = null) {
    this.name = name;
    this.func = func;
    this.help = help;
}

Command.prototype.execute = function(args, msgObj, c_map) {
    // [ ] Verify args;
    if (this.func != null)
        this.func(args, msgObj, c_map);
}

var register = new Command(";register");
register.help = "Register as new Player.";
register.func = function(args, msgObj, c_map) {
    let roles = msgObj.member.guild.roles;
    let role = roles.find(val => val.name === "Player");
    msgObj.member.addRole(role);
    msgObj.author.send("Registered on Legend Heroes!");
};

var displayHelp = new Command(";help");
displayHelp.help = "Display current map commands help.";
displayHelp.func = function(args, msgObj, c_map) {
    let msg = "\n";
    msg += "Help:\n";
    for (let i = 0; i < c_map.list_cmd.length; i++) {
        var cmd = c_map.list_cmd[i];
        msg += "\t" + cmd.name + ": " + cmd.help + "\n";
    }
    msgObj.reply(msg);
};

//==============================================================

var Commands = {
    ";help": displayHelp,
    ";register": register
};

module.exports = Commands;
