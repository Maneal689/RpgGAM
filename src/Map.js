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
            if (msgObj.content.startsWith(this.list_cmd[i].name)) {
                let args = msgObj.content.split(" ");
                let cmd = args[0];
                args = args.splice(1, args.length - 1);
                this.list_cmd[i].execute(args, msgObj, this);
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

var regMap = new Map([Commands[";register"], Commands[";help"]]);

var restMap = new Map([Commands[";send"], Commands[";duel"], Commands[";ls"], Commands[";add_friend"], Commands[";help"]]);

var questMap = new Map([Commands[";ls_quest"], Commands[";accept_quest"], Commands[";ls"], Commands[";send"], Commands[";duel"], Commands[";add_friend"], Commands[";help"]]);

////var pvpMap = new Map([";aggro",";ls", ";send", ";duel", ";add_friend"]);

//genMap.parse(";send \"hello all\"");
module.exports = {
    "registration": regMap,
    "quests": questMap
}
