const mongoose = require("mongoose");
const Defaults = require("../constants/defaults");

async function checkMongoDbClient(config) {
  return new Promise((resolve, _) => {
    mongoose
      .connect(config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        serverSelectionTimeoutMS: config.timeout || Defaults.MongoDbTimeout,
      })
      .then(() => {
        mongoose.connection.close(true);
        resolve({
          status: true,
          error: null,
        });
      })
      .catch((error) => {
        mongoose.connection.close(true);
        resolve({
          status: false,
          error,
        });
      });
  });
}

module.exports = checkMongoDbClient;
