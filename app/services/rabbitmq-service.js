const amqp = require('amqplib');
// const { Defaults } = require('../constants');

async function checkRabbitMqClient(config) {
    const conn = await amqp.connect(config.url);
    conn.close();
}

module.exports = checkRabbitMqClient;
