class Base {
    constructor() {
        this.status = null;
        this.error = null;
        this.startTime = null;
        this.url = null;
    }

    validate() {
        if (!this.url) {
            throw new Error('URL is required!');
        }

        if (!this.serviceName) {
            throw new Error('ServiceName is required!');
        }
    }

    // eslint-disable-next-line class-methods-use-this
    check() {
        throw new Error('Can not call this method on Base class');
    }

    getResponse() {
        return {
            serviceName  : this.serviceName,
            serviceType  : this.seerviceType,
            url          : this.url,
            status       : this.status,
            responseTime : this.getDeltaTime(this.startTime),
            error        : this.error,
        };
    }

    // eslint-disable-next-line class-methods-use-this
    getCurrentTime() {
        return new Date().getTime();
    }

    // eslint-disable-next-line class-methods-use-this
    getDeltaTime(time) {
        return (new Date().getTime() - time) / 1000;
    }
}

module.exports = Base;
