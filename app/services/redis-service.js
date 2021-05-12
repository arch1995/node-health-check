const { createClient } = require('redis');
const { Defaults } = require('../constants');

function checkRedisClient(config) {
    return new Promise((resolve, reject) => {
        const client = createClient({
            url             : config.url,
            connect_timeout : config.timeout || Defaults.RedisTimeout,
        });

        client.on('error', (error) => {
            client.end(true);
            reject(error);
        });

        client.ping((status) => {
            client.end(true);
            if (status) return resolve();
            return reject(new Error('No Status'));
        });
    });
}

module.exports = checkRedisClient;
