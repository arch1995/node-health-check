const { HealthCheckerTypes } = require('../../constants');
const Base = require('./base');

const { checkRabbitMqClient } = require('../../services');

class RabbitMq extends Base {
    constructor(options = {}) {
        super();

        this.serviceName = options.serviceName || '';
        this.serviceType = HealthCheckerTypes.RabbitMq;
        this.url = options.url;
        this.timeout = options.timeout;
    }

    async check() {
        try {
            this.validate();
            this.startTime = this.getCurrentTime();
            await checkRabbitMqClient({
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

module.exports = RabbitMq;
