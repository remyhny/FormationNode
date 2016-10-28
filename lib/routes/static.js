'use strict'

const Inert = require('inert');

module.exports = function (server, path) {

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
}