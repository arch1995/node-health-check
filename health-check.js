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
            type        : HealthCheckerTypes.mysql,
            serviceName : 'mysql integration',
            host        : 'localhost',
            user        : 'username',
            database    : 'dbname',
            password    : 'password',
        },
    ],
};
