const mongoose = require('mongoose');
const { Defaults } = require('../constants');

async function checkMongoDbClient(config) {
    try {
        await mongoose.connect(config.url, {
            useNewUrlParser          : true,
            useUnifiedTopology       : true,
            autoIndex                : false,
            serverSelectionTimeoutMS : config.timeout || Defaults.MongoDbTimeout,
        });
        mongoose.connection.close(true);
        return {
            status : true,
            error  : null,
        };
    } catch (error) {
        return {
            status: false,
            error,
        };
    }
}

module.exports = checkMongoDbClient;
