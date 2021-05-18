const { HealthCheckerTypes } = require('../../constants');
const Base = require('./base');

const { checkMysqlClient } = require('../../services');

class Mysql extends Base {
    constructor(options = {}) {
        super();

        this.serviceName = options.serviceName;
        this.serviceType = HealthCheckerTypes.Mysql;
        this.url = options.url;
        this.timeout = options.timeout;
        this.host = options.host;
        this.user = options.user;
        this.database = options.database;
        this.password = options.password;
    }

    async check() {
        try {
            this.validate();
            this.startTime = this.getCurrentTime();
            await checkMysqlClient({
                host     : this.host,
                user     : this.user,
                database : this.database,
                password : this.password,
            });
            this.status = true;
        } catch (error) {
            this.status = false;
            this.error = error;
        }
    }
}

module.exports = Mysql;
