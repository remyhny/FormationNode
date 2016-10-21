const server = require('../lib/server.js');
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

if (args.h || !args.d) {
    console.log(Bossy.usage(definition, 'hello -n <name>'))
    return;
}

let port = args.p;
let directory = args.d;

server.start(directory, port, () => {
    console.log('server start');
});