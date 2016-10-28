'use strict'

const classServer = require('../lib/server.js');
const Bossy = require('bossy');



var definition = {
    p: {
        description: 'server port',
        alias: 'port',
        type: 'number',
        default : 3000
    },
    d: {
        description: 'directory',
        alias: 'directory',
        type: 'string'
    },
    h: {
        description: 'show help',
        alias: 'help',
        type: 'boolean'
    }
}

var args = Bossy.parse(definition);

/*if (args.h || !args.d) {
    console.log(Bossy.usage(definition, 'hello -n <name>'))
    return;
}*/

let port = args.p;
let directory = args.d;

let server = new classServer();

server.configure('public', port);

server.start(() => {
    console.log('server start');
});
