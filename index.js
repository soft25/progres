var SlackBot = require('./bot.js');

var bot = new SlackBot({
    token: process.env.SLACK_BOT_TOKEN, 
    name: 'sofiane Bot'
});
bot.connect();

/*bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'meow!', params);
    
    // define existing username instead of 'user_name'
    bot.postMessageToUser('soft', 'meow!', params); 
    
});*/

