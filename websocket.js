// var remove = require('./plugin/remove.js');
var user = [];
module.exports = function(socket){
	socket.on('connection', function(client){
		user.push(client);
		client.emit('news', {msg: '為同婚合法化歡呼~~'});
		// client.on('event', function(data){
			// console.log(data);
		// })
		client.on('chat', function(data){
			if(data==='')return false;
			for(var i=0;i<user.length;i++)
				user[i].emit('chat', "<b>" + client.client.id+"</b> : "+data.replace(/</g,"&lt"));
		})
		//disconnect use
		client.on('disconnect', function(data){
			// console.log(client.client.id);
			for(var i=0;i<user.length;i++){
				user[i].emit('chat', "System: <b>" + client.client.id + "</b> leave.")
			}
			user.remove(client);
		});
	})
}

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};
