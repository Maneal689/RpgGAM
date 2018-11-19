//module.exports.Map = Map;
//module.exports.questMap = questMap;
//module.exports.regMap = regMap;
//module.exports.restMap = restMap;

const Commands = require("./Command.js");
const strFunctions = require("./utils.js");

function Map (l_cmd = []) {
    this.list_cmd = l_cmd;
    this.players = [];
}

Map.prototype.parse = function(msgObj) {
    if (msgObj.content.startsWith(";")) {
        let i = 0;
        while (i < this.list_cmd.length) {
            if (msgObj.content.startsWith(this.list_cmd[i])) {
                let args = msgObj.content.split(" ");
                let cmd = args[0];
                args = args.splice(1, args.length - 1);
                Commands.execute(cmd, args, msgObj, this);
            }
            i++;
        }
    }
};

/*
 *  send (player): send private msg to Player
 *  duel (player): ask duel to Player
 *  ls: List all the online players
 *  add_friend: ask Player to become friend
 *
 *  ls_quest : list quests
 *  accept_quest(id_quest): accept quest
 *
 *  aggro(player): aggro Player (A enlever)
 */

var regMap = new Map([";register", ";help"]);

var restMap = new Map([";send", ";duel", ";ls", ";add_friend", ";help"]);

var questMap = new Map([";ls_quest", ";accept_quest", ";ls", ";send", ";duel", ";add_friend", ";help"]);

////var pvpMap = new Map([";aggro",";ls", ";send", ";duel", ";add_friend"]);

//genMap.parse(";send \"hello all\"");
module.exports = {
    "registration": regMap,
    "quests": questMap
}
