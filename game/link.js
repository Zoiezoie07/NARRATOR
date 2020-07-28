const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "link",
  description: "to edit the server link",
  catgory: "game",
  run: async (bot, message, args) => {
    let link = db.fetch(`link`);
    db.set(`link`, args[0]);
    message.channel.send(
      `<@${message.author.id}> has changed the link.\nNew link: ${args[0]}`
    );
  }
};
