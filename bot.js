const SlackBot = require('slackbots');
 
module.exports = function(params){
	this.bot = null;
	var self = this;
	this.connect=function(){
		self.bot = new SlackBot(params);
		self.bot.on('start',self.onStart);
		self.bot.on('message',self.onEvent);
	}
	this.onStart=function() {
    	console.log('start');
		self.bot.postMessageToUser('soft', 'salutn je suis là!!!'); 
	}
	this.onEvent=function(event) {
    	console.log(event);
	}
}
