const server = require('./lib/server.js');

server.start(()=>{
	console.log('server start');
});

exports = server;