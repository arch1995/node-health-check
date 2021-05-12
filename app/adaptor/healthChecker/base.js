class Base {
  constructor() {
    this.serviceName = null;
    this.serviceType = null;
    this.status = null;
    this.error = null;
    this.startTime = null;
    this.url = null;
  }

  check() {
    throw new Error("Can not call this method on Base class");
  }

  getResponse() {
    return {
      service_name: this.serviceName,
      service_type: this.seerviceType,
      url: this.url,
      status: this.status,
      responseTime: _getDeltaTime(this.startTime),
      error: this.error,
    };
  }

  getCurrentTime() {
    return new Date().getTime();
  }
}

module.exports = Base;

function _getDeltaTime(time) {
  return (new Date().getTime() - time) / 1000;
}
