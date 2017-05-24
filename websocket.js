module.exports = function(server){
	var socket = require('socket.io')(server);
	socket.on('connection', function(client){
		client.emit('news', {msg: 'i see you <3'});
		client.on('my other event', function (data) {
			console.log(data);
		});
		client.on('event', function(data){
			console.log(data);
		})

		//disconnect use
		client.on('disconnect', function(){});
	})
}
