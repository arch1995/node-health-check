const healthCheckFactory = require("../factory/healthCheckerFactory");

function SimpleHealthCheck() {
  return { status: "ok" };
}

async function DetailedHealthCheck(config) {
  const integrations = await Promise.all(
    (config.integrations || []).map(async (item) => {
      const ob = healthCheckFactory.create(item.type, item);
      await ob.check();
      return ob.getResponse();
    })
  );

  return {
    name: config.name || "",
    status: !integrations.some(({ status }) => status === false),
    integrations,
  };
}

module.exports = {
  SimpleHealthCheck,
  DetailedHealthCheck,
};
