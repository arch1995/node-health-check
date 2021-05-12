const { HealthCheckerTypes } = require("../types/healtChecker");
const RedisHealthCheck = require("../adaptor/healthChecker/redis");
const MongoDbHealthCheck = require("../adaptor/healthChecker/mongodb");

function factory() {}

const adaptorMap = {
  [HealthCheckerTypes.Redis]: RedisHealthCheck,
  [HealthCheckerTypes.MongoDb]: MongoDbHealthCheck,
};

factory.prototype.create = function (name, options) {
  const model = adaptorMap[name];
  if (!model) throw new Error(`Invalid model name ${name}`);
  const ob = new model(options);
  return ob;
};

module.exports = new factory();
