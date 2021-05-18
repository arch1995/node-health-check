const HealthCheckerTypes = {
    Redis   : 'redis',
    MongoDb : 'mongodb',
    Mysql   : 'mysql',
};

const Defaults = {
    RedisTimeout   : 2 * 1000,
    MongoDbTimeout : 5 * 1000,
};

module.exports = {
    Defaults,
    HealthCheckerTypes,
};
