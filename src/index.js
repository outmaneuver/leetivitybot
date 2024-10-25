const Discord = require('discord.js');
const config = require('./config');
const leetcode = require('./leetcode');
const discord = require('./discord');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('LeetivityBot is online!');
  discord.postDailyProblem(client);
});

client.login(config.DISCORD_TOKEN);