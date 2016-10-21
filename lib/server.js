'use strict'

const Hapi = require('hapi');
const Inert = require('inert');
const Bossy = require('bossy');
module.exports.start = function (path, port, callback) {
    const server = new Hapi.Server();

    server.connection({ port: port });
    server.register(Inert, (err) => {
        server.route({
            method: 'GET',
            path: '/static/{param*}',
            handler: {
                directory: {
                    path: path,
                    listing: true,
                    redirectToSlash: true,
                    index: true,
                    lookupCompressed: true
                }
            }
        });
    });
    
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