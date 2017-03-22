const SlackBot = require('slackbots');
 
module.exports = function(params){
	this.bot = null;
	var self = this;
	this.connect=function(){
		self.bot = new SlackBot(params);
		self.on('start',self.onStart);
		self.on('message',self.onEvent);
	}
	this.onStart=function() {
    	console.log(self.bot);
	}
	this.onEvent=function(event) {
    	console.log(event);
	}
}
