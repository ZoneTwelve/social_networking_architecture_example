window.onload = function(){
	//sendMessage on socket.core.js
	onclickFunc({type:"id",id:"send",func:sendMessage});

	onclickFunc({type:"id",id:"clear",func:function(){
		document.getElementById("message").innerHTML = '';
	}})

	document.getElementById("msg").onkeypress = function(event){
		if(event.key.toUpperCase()==="ENTER"&&this.value!='')
			sendMessage();
	}
}

function onclickFunc(info){
	switch(info.type){
		case "id":
			document.getElementById(info.id).onclick = info.func;
			break;
		case "class":
			document.getElementsByClassName(info.id)[info.n].onclick = func;
			break;
	}
}

/*
window.onload = function(){
	setup();
}

function setup(){
	var html = {};
	html.main = createHTML("div", '', "main");
	html.title = createHTML("h1", "Welcome");
	document.body.appendChild(html.main.appendChild(html.title));
}

function createHTML(tag, content, id, _class){
	var tmp = document.createElement(tag);
	tmp.appendChild(document.createTextNode(content));
	if(id!=undefined)tmp.id = id;
	if(Class!=undefined)tmp.className = _class;
	return tmp;
}
function appendHTML(a, b){
	return a.appendChild(b);
}
*/