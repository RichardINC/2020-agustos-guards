const {Discord,Client,MessageEmbed} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const RoleClient = global.RoleClient = new Client({ fetchAllMembers: true });
const Guard1Client = global.Guard1Client = new Client({ fetchAllMembers: true });
const Guard2Client = global.Guard2Client = new Client({ fetchAllMembers: true });
const Guard3Client = global.Guard3Client = new Client({ fetchAllMembers: true });
const Guard4Client = global.Guard4Client = new Client({ fetchAllMembers: true });
const Guard5Client = global.Guard5Client = new Client({ fetchAllMembers: true });

//// COMMAND HANDLER ////
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
//// COMMAND HANDLER ////



///////////////// GLOBALS /////////////////
const conf = global.conf = require("./SRC/Configs/config.json");
const settings = global.settings = require("./SRC/Configs/settings.json");
const emojis = global.emojis = require("./SRC/Configs/emojis.json");
const globalFx = global.globalFx = require('./SRC/Functions/_GlobalFx.js');
globalFx.setup()
require("./SRC/Database/Utils.js");
///////////////// GLOBALS /////////////////

/////////////////// HANDLER ///////////////////
RoleClient.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["eval", "italy", "xrd"]
      if(veriler.includes(command)) {
  let guardbotu = message.RoleClient;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Defender/Commands", (err, files) => {
  if(err) return console.error(err);
    files = files.filter(file => file.endsWith(".js"));
    console.log('\x1b[32m%s\x1b[0m', `[ DEFENDER CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} COMMANDS LOADED ]`);
    files.forEach(file => {
let prop = require(`./SRC/Projects/Guard/Defender/Commands/${file}`);
  if(!prop.defenderconfig) return;
  if(typeof prop.onLoad === "function") prop.onLoad(ModerationClient);
    commands.set(prop.defenderconfig.name, prop);
  if(prop.defenderconfig.aliases) prop.defenderconfig.aliases.forEach(aliase => aliases.set(aliase, prop));
  });
});
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Defender/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Defender/Events/${file}`);
  if(!prop.defenderconfig) return;
  RoleClient.on(prop.defenderconfig.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard1Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard1Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_1/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 1 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_1/Events/${file}`);
  if(!prop.guard1config) return;
  Guard1Client.on(prop.guard1config.name, prop);
      });
    });
//////////////////////////////////////

/////////////////// HANDLER ///////////////////
Guard2Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard2Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_2/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 2 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_2/Events/${file}`);
  if(!prop.guard2config) return;
  Guard2Client.on(prop.guard2config.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard3Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard3Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_3/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 3 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_3/Events/${file}`);
  if(!prop.guard3config) return;
  Guard3Client.on(prop.guard3config.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard4Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard4Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_4/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 4 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_4/Events/${file}`);
  if(!prop.guard4config) return;
  Guard4Client.on(prop.guard4config.name, prop);
      });
    });
//////////////////////////////////////
/////////////////// HANDLER ///////////////////
Guard5Client.on("message", (message) => {
  if (message.author.bot ||!message.content.startsWith(settings.prefix) || !message.channel || message.channel.type == "dm") return;
  let args = message.content
      .substring(settings.prefix.length)
      .split(" ");
  let command = args[0];
  var veriler = ["taslak5"]
      if(veriler.includes(command)) {
  let guardbotu = message.Guard5Client;
  args = args.splice(1);
  let calistirici;
  if (commands.has(command)) {
    calistirici = commands.get(command);
    calistirici.execute(guardbotu, message, args);
  } else if (aliases.has(command)) {
    calistirici = aliases.get(command);
    calistirici.execute(guardbotu, message, args);
  }
  }
})
    ///////////////////
fs.readdir("./SRC/Projects/Guard/Guard_5/Events", (err, files) => {
  if(err) return console.error(err);
    console.log('\x1b[32m%s\x1b[0m', `[ Guard 5 CONNECTED ]`);
    console.log('\x1b[36m%s\x1b[0m', `[ ${files.length} EVENTS LOADED ]`);
    console.log('\x1b[31m%s\x1b[0m', `[ -------------------------------- ]`);
    files.filter(file => file.endsWith(".js")).forEach(file => {
  let prop = require(`./SRC/Projects/Guard/Guard_5/Events/${file}`);
  if(!prop.guard5config) return;
  Guard5Client.on(prop.guard5config.name, prop);
      });
    });
//////////////////////////////////////