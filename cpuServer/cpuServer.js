/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------
// This application uses express as its web server
// for more info, see: http://expressjs.com
const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io')
//helmet is a set of security features for express server
const helmet = require('helmet');
const mysql = require("mysql");
const fs = require("fs");
const cryptojs = require('crypto-js');

// create a new express server
const app = express();
app.use(helmet());
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')))

//SQL DB connection
var sqlcon = mysql.createPool({
	connectionLimit : 10,
	host: "localhost",
	user: "root",//sim_app
	password: "b24hacker",
	database: "cpuproj"
});

sqlcon.getConnection(function(err){
	if(err){
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});

//setup mqtt and connect to topic
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1');

client.on('connect', function(){
	client.subscribe('groupproject');
	client.publish('gropproject/connect', 'true');
})

client.on('message', function(topic, message) {
	var input = message.toString();

	var bytes = cryptojs.AES.decrypt(input, 'vThwa79qRsXpyoDrf94jsef9ntoA+0FdfHIhSW34tPU=');
	var plaintext = bytes.toString(cryptojs.enc.Utf8);

	var toJSON = JSON.parse(plaintext);

		//console.log(toJSON);

	var post = new Object();
	post.hostname = toJSON.hostname;
	post.cpu0 = toJSON.cpu0;
	post.cpu1 = toJSON.cpu1;
	post.cpu2 = toJSON.cpu2;
	post.cpu3 = toJSON.cpu3;
	post.cpu4 = toJSON.cpu4;
	post.cpu5 = toJSON.cpu5;
	post.cpu6 = toJSON.cpu6;
	post.cpu7 = toJSON.cpu7;
	post.time = toJSON.time;

	console.log(post);

	sqlcon.query('INSERT INTO observations SET ?', post, function(err,result){
		if(err) throw err;
		console.log(result);
	});
});

io.on('connection', socket => {
  //handle new message
  socket.on('test', message => {
    socket.broadcast.emit('test');
  });
});


// start server on the specified port and binding host
server.listen(3000, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server has started");
});
