const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const getSize = require('get-folder-size'); 
module.exports = (client, guild, files) => {
    client.user.setActivity("LOADING STATUS.........")
//Ready Console Message
const timestamp = `${moment().format("YYYY-MM-DD HH:mm:ss")}`;
console.log(`Started ${client.user.username} at ${timestamp}!`)


fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    getSize("./", (err, size) => {
let startEmbed = new Discord.RichEmbed()
.setTitle(`${client.user.username} Started!`)
.setColor("#53f23e")
.addField("__**Time:**__", timestamp, true)
.addField("__**Total Members:**__", client.guilds.reduce((p, c) => p + c.memberCount, 0), true)
.addField("__**Total Channels:**__", client.channels.size, true)
.addField("__**Commands:**__", files.length, true)
.addField("__**Directory Size:**__", ((size / 1024 / 1024).toFixed(2) + ' MB'), true)
client.channels.get(config.commandlogs).send(startEmbed);
})
})

//Auto Activities List
const activities = [
    {
        "text": `over ${client.guilds.reduce((p, c) => p + c.memberCount, 0)} members`,
        "type": "WATCHING"
    },
    {
        "text": "with moderation in DBA",
        "type": "PLAYING"
    }
];
setInterval(() => {
    client.user.setStatus('online')
    const activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity.text, { type: activity.type }); 
}, 10000);   


}