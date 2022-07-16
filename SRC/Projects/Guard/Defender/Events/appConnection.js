const Discord = require("discord.js");
const fs = require("fs");
module.exports = async () => {
  RoleClient.user.setPresence({ activity: { name: settings.activity }, status: "ONLINE" });
  RoleClient.channels.cache.get(conf.voice).join();
}; 

  module.exports.defenderconfig = {
      name: "ready"
    }