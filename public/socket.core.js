var socket = io("https://"+location.host);
socket.on('news', function(data){
	document.getElementById("name").textContent = socket.id+": ";
	document.getElementById("message").innerHTML += '<p>連線成功</p>';
	console.log(data);
	socket.emit('event', {msg:"恭喜!!"});
});
socket.on('chat', function(data){
	var message_form = document.getElementById("message");
	// message_form.textContent += data+"\r\n";
	message_form.innerHTML += data+"<br />";
	// message_form.innerHTML += "&nbsp;";
	// message_form.appendChild(document.createElement("br"));
})
function sendMessage(){
	var msg = document.getElementById("msg")
	if(msg==='')return false;
	socket.emit("chat", msg.value);
	msg.value = '';
}
