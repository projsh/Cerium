module.exports.run = async (bot, message, args) => {
    const config = require("../config.json");    
    if (message.author.id == config.hostid) {
        message.channel.send("Exiting Cerium...").then(function() {
        process.exit();
    });
    } else {
        message.channel.send("Only the bot's host may power off the bot.");
    }
}
module.exports.help = {
    name: "exit",
    desc: "Powers off the bot.",
    parms: "None"
}