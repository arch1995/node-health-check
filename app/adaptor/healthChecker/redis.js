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
    }

    async check() {
        try {
            this.validate();
            this.startTime = this.getCurrentTime();
            await checkRedisClient({
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

module.exports = Redis;
