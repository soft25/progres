var SlackBot = require('./bot.js');

var bot = new SlackBot({
    token: process.env.SLACK_BOT_TOKEN, 
    name: 'sofiane Bot'
});
bot.connect();
