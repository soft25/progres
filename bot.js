const SlackBot = require('slackbots');
 
module.exports = function(params){
	this.bot = null;
	var self = this;
	self.connect=function(){
		self.bot = new SlackBot(params);
		self.bot.on('start',self.onStart);
		self.bot.on('message',self.onEvent);
	}
	self.onStart=function() {
    	console.log('start');
		self.bot.postMessageToUser('soft', 'salutn je suis là!!!'); 
	}
	self.onEvent=function(event) {
    	console.log(event);
		if(!event.bot_id && event.type=='message'){
			 self.bot.postMessage(event.channel, 'meow!');		
		}
	}
	
}
