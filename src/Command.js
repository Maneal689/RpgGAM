module.exports.execute = execute;

function execute(cmd, args) {
    Commands[cmd](args);
}

var Commands = {
    ";send": send
};

function send(args) {
    let i = 0;
    while (i < args.length) {
        console.log(args[i]);
        i++;
    }
}
