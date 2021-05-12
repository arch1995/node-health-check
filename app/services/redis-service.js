const { createClient } = require('redis');
const { Defaults } = require('../constants');

function checkRedisClient(config) {
    return new Promise((resolve, _reject) => {
        const client = createClient({
            url             : config.url,
            connect_timeout : config.timeout || Defaults.RedisTimeout,
        });

        client.on('error', (error) => {
            client.end(true);
            resolve({
                status: false,
                error,
            });
        });

        client.ping((status) => {
            client.end(true);
            resolve({
                status : status === null,
                error  : status !== null ? status : null,
            });
        });
    });
}

module.exports = checkRedisClient;
