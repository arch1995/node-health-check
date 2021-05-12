const mongoose = require('mongoose');
const { Defaults } = require('../constants');

async function checkMongoDbClient(config) {
    await mongoose.connect(config.url, {
        useNewUrlParser          : true,
        useUnifiedTopology       : true,
        autoIndex                : false,
        serverSelectionTimeoutMS : config.timeout || Defaults.MongoDbTimeout,
    });
    mongoose.connection.close(true);
}

module.exports = checkMongoDbClient;
