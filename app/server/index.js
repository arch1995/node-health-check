const express = require("express");
const {
  DetailedHealthCheck,
  SimpleHealthCheck,
} = require("../lib/healthChecker");
const { HealthCheckerTypes } = require("../types/healtChecker");

const server = express();

server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.get("/health-check/liveness", (_, res) => {
  res.send(SimpleHealthCheck());
});

server.get("/health-check/readiness", async (_, res) => {
  res.send(
    await DetailedHealthCheck({
      name: "My node application",
      integrations: [
        {
          type: HealthCheckerTypes.Redis,
          serviceName: "redis integration",
          url: "redis://localhost:6379",
        },
        {
          type: HealthCheckerTypes.MongoDb,
          serviceName: "mongodb integration",
          url: "localhost:27017/db",
        },
      ],
    })
  );
});

module.exports = server;
