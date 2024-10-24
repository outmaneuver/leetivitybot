const { Client, Intents } = require('discord.js');
const config = require('./config');
const leetcode = require('./leetcode');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

async function postDailyProblem() {
  const problem = await leetcode.fetchDailyProblem();
  const channel = client.channels.cache.get(config.CHANNEL_ID);
  if (channel) {
    const message = `**${problem.question.title}**\nDifficulty: ${problem.question.difficulty}\n[Link to problem](https://leetcode.com${problem.link})`;
    channel.send(message);
  } else {
    console.error('Channel not found');
  }
}

module.exports = {
  postDailyProblem,
};
