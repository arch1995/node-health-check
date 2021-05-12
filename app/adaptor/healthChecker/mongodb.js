const { HealthCheckerTypes } = require('../../constants');
const Base = require('./base');

const { checkMongoDbClient } = require('../../services');

class MongoDb extends Base {
    constructor(options = {}) {
        super();

        this.serviceName = options.serviceName || '';
        this.serviceType = HealthCheckerTypes.MongoDb;
        this.url = options.url;
        this.timeout = options.timeout;
        this.validate();
    }

    async check() {
        this.startTime = this.getCurrentTime();
        const result = await checkMongoDbClient({
            url     : this.url,
            timeout : this.timeout,
        });
        this.status = result.status;
        this.error = result.error;
    }
}

module.exports = MongoDb;
