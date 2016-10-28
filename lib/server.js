'use strict'

const Hapi = require('hapi');
const Bossy = require('bossy');

const staticRoutes = require('./routes/static.js');
const restRoutes =  require('./routes/rest.js');

const mongoClient = require('mongodb').MongoClient;

module.exports.start = function (path, port, callback) {
    const server = new Hapi.Server();

    server.connection({ port: port });
    staticRoutes(server, path);

    var url = 'mongodb://192.168.1.21:27017/formation-remy';
    mongoClient.connect(url, function (err, database) {
        if (err) throw err;

        console.log('connect to database');
        restRoutes(server, database);
    })

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