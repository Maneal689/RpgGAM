var c_map = null;

function execute(cmd, args, msgObj, map) {
    c_map = map;
    Commands[cmd](args, msgObj);
}

var Commands = {
    ";send": send,
    ";help": disp_help,
    ";register": register
};

function send(args, msgObj) {
    let i = 0;
    while (i < args.length) {
        console.log(args.join(' '));
        i++;
    }
}

function disp_help(args, msgObj) {
    let msg = "\n";
    msg += "Help:\n";
    for (let i = 0; i < c_map.list_cmd.length; i++)
        msg += "\t" + c_map.list_cmd[i] + "\n";
    msgObj.reply(msg);
}

function register(args, msgObj) {
    console.log("Registered!");
    let roles = msgObj.member.guild.roles;
    let role = roles.find(val => val.name === "Player");
    msgObj.member.addRole(role);
    msgObj.author.send("Registered!");
}

module.exports.execute = execute;
