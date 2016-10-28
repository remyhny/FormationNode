'use strict'

const Joi = require('joi');
const Boom = require('boom');

module.exports = function (server, database) {

    server.route({
        method: 'POST',
        path: '/user',
        config: {
            validate: {
                payload: {
                    name: {
                        first: Joi.string().min(4).max(100),
                        last: Joi.string().min(4).max(100)
                    },
                    username: Joi.string().min(3).max(100).required()
                }
            }
        },
        handler: function (request, reply) {
            let userCollection = database.collection('RemyBase');
            userCollection.insert(request.payload, function (err, result) {
                if (err) {return reply(boom.wrap(err, 500, "User insertion error"))};
                reply('element inseré : ', request.payload);
            })
        }
    });
}