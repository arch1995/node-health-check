const { HealthCheckerTypes } = require('../../constants');
const Base = require('./base');

const { checkRedisClient } = require('../../services');

class Redis extends Base {
    constructor(options = {}) {
        super();

        this.serviceName = options.serviceName || '';
        this.serviceType = HealthCheckerTypes.Redis;
        this.url = options.url;
        this.timeout = options.timeout;
        this.validate();
    }

    async check() {
        this.startTime = this.getCurrentTime();
        const result = await checkRedisClient({
            url     : this.url,
            timeout : this.timeout,
        });
        this.status = result.status;
        this.error = result.error;
    }
}

module.exports = Redis;
