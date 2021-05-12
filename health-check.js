const { HealthCheckerTypes } = require('./index');

module.exports = {
    name         : 'testing application',
    integrations : [
        {
            type        : HealthCheckerTypes.Redis,
            serviceName : 'redis integration',
            url         : 'redis://localhost:6379',
        },
        {
            type        : HealthCheckerTypes.MongoDb,
            serviceName : 'mongodb integration',
            url         : 'localhost:27017/db',
        },
        {
            type        : HealthCheckerTypes.RabbitMq,
            serviceName : 'rabbitmq integration',
            url         : 'amqp://localhost',
        },
    ],
};
