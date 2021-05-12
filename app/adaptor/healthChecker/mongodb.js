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
    }

    async check() {
        try {
            this.validate();
            this.startTime = this.getCurrentTime();
            await checkMongoDbClient({
                url     : this.url,
                timeout : this.timeout,
            });
            this.status = true;
        } catch (error) {
            this.status = false;
            this.error = error;
        }
    }
}

module.exports = MongoDb;
