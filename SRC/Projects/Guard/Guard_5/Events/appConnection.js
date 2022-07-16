const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  Guard5Client.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
   Guard5Client.channels.cache.get(conf.voice).join();
  }; 
  module.exports.guard5config = {
      name: "ready"
    }