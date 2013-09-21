// ChatRoom //extends EventEmitter ????

//var util = require("util");
//var events = require("events");

var _ = require("lodash");


function ChatRoom(params) {
	//events.EventEmitter.call(this);
	this.occupants = [];
	this.name = (params && params.name) ? params.name : "unnamed";
	this.id = (params && params.id) ? params.id : 0;
}

//util.inherits(ChatRoom, events.EventEmitter);


// METHODS

// callback: done(err, this room)
ChatRoom.prototype.join = function(conn, done) {
	if (!conn) {
		console.log("ChatRoom[" + this.id + "," + this.name + "]: connection is null");
		if (done) done({error:"nullconn", message:"connection is null"});
	}
	else if (this.occupants.indexOf(conn) != -1 || _.find(this.occupants, function(occupant){occupant.user.id==conn.user.id})) {
		console.log("ChatRoom[" + this.id + "," + this.name + "]: connection " + conn.user.nickname + " tried to join but is already here"); 
		if (done) done({where:'chatroom', room:this.id, error:"duplicate", message: "You're already here!"});
	}
	else {
		this.occupants.push(conn);
		console.log("ChatRoom[" + this.id + "," + this.name + "]: added " + conn.user.nickname + " to room, occupants: ", this.getOccupantNicknames());
		conn.room = this;
		this.broadcast("join", {room:this.id, nickname:conn.user.nickname});
		if (done) done(null, {room:this.id, roomName:this.name, error:false, occupants:this.getOccupantNicknames()});
	}
}

// callback: done(err)
ChatRoom.prototype.leave = function(conn, done) {
	var index = this.occupants.indexOf(conn);
	if (index == -1) {
		console.log("ChatRoom[" + this.id + "," + this.name + "]: connection " + conn.user.nickname + " tried to leave but is not here"); 
		if (done) done({where:'chatroom', room:this.id, error:"nothere", message: "Can't leave room you're not in"});
	}
	else {
		this.occupants.splice(index, 1);
		conn.room = null;
		this.broadcast("leave", {nickname:conn.user.nickname});
		if (done) done(null);
	}
}

// callback: done() (no error conditions)
ChatRoom.prototype.say = function(conn, text, done) {
	console.log("ChatRoom[" + this.id + "," + this.name + "]: connection " + conn.user.nickname + " says " + text);
	this.broadcast("say", {nickname:conn.user.nickname, text:text});
	if (done) done(null);
}



ChatRoom.prototype.broadcast = function(event, data) {
	for (var i=0; i<this.occupants.length; i++) {
		this.occupants[i].writeEvent(event, data);
	}
}


// return list of occupant user properties (default id and nickname)
ChatRoom.prototype.getOccupantProperties = function(props) {
	if (!props) props = ['id', 'nickname'];
	var occupants = [];
	for (var i=0; i<this.occupants.length; i++) {
		var occ = {};
		for (var j=0; j<props.length; j++) {
			occ[props[j]] = this.occupants[i].user[j];
		}
	}
	return occupants;
}


// return list of occupant nicknames
ChatRoom.prototype.getOccupantNicknames = function() {
	var names = [];
	for (var i=0; i<this.occupants.length; i++) {
		names.push(this.occupants[i].user.nickname);
	}
	return names;
}



module.exports = ChatRoom;