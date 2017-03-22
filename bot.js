const SlackBot = require('slackbots');
const axios =  require('axios');
 
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

		self.bot.getUser(self.bot.self.name).then(function(user){
			self.user = user;		
		});
	}
	self.onEvent=function(event) {
    	console.log(event);
		if(!event.bot_id && event.type=='message'){
			// self.bot.postMessage(event.channel, 'meow!');		
		
		axios.get("http://www.chucknorrisfacts.fr/api?tri=alea&nb=1")
	    .then(function (response) {
			console.log(response);
	    	self.bot.postMessage(event.channel,response.data[0].fact);
  		});
		}
	}
	
}
