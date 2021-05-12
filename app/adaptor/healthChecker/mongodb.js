const HealthCheckerTypes = require("../../types/healtChecker");
const Base = require("./base");

const { checkMongoDbClient } = require("../../services");

class MongoDb extends Base {
  constructor(options = {}) {
    super();
    if (!options.url) {
      throw new Error("URL is required!");
    }

    this.serviceName = options.serviceName || "";
    this.serviceType = HealthCheckerTypes.MongoDb;
    this.url = options.url;
    this.timeout = options.timeout;
  }

  async check() {
    this.startTime = this.getCurrentTime();
    const result = await checkMongoDbClient({
      url: this.url,
      timeout: this.timeout,
    });
    this.status = result.status;
    this.error = result.error;
  }
}

module.exports = MongoDb;
