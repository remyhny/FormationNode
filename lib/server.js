'use strict'

const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({ port: 3000 });
server.register(Inert, (err) => {
    server.route({
        method: 'GET',
        path: '/static/{param*}',
        handler: {
            directory: {
                path: './public',
                listing : true
            }
        }
    });
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world !');
    }
})


module.exports.start = function (callback) {
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`serveur running at : ${server.info.uri}`)
        if (callback) {
            callback();
        }
    })
}