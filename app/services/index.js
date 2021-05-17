module.exports = {
    checkRedisClient    : require('./redis-service'),
    checkMongoDbClient  : require('./mongodb-service'),
    checkRabbitMqClient : require('./rabbitmq-service'),
};
