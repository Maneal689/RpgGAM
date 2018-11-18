module.exports.Map = Map;

var Commands = require("./Command.js");
var strFunctions = require("./utils.js");

function Map (l_cmd = []) {
    this.list_cmd = l_cmd;
    this.players = [];
}

Map.prototype.parse = function(msg) {
    if (msg.startsWith(";")) {
        let i = 0;
        while (i < this.list_cmd.length) {
            if (msg.startsWith(this.list_cmd[i])) {
                let args = msg.split(" ");
                let cmd = args[0];
                args = args.splice(1, msg.length - 1);
                Commands.execute(cmd, args);
            }
            i++;
        }
    }
};

/*
 *  send (player): send private msg to Player
 *  duel (player): ask duel to Player
 *  ls: List all players on the current map
 *  add_friend: ask Player to become friend
 *
 *  ls_quest : list quests
 *  accept_quest(id_quest): accept quest
 *
 *  aggro(player): aggro Player
 */

var genMap = new Map([";send", ";duel", ";ls", ";add_friend"]);

var guildMap = new Map([";ls_quest", ";accept_quest", ";ls", ";send", ";duel", ";add_friend"]);

var pvpMap = new Map([";aggro",";ls", ";send", ";duel", ";add_friend"]);

genMap.parse(";send \"hello all\"");
