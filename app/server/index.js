// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const { DetailedHealthCheck, SimpleHealthCheck } = require('../lib/healthChecker');
// const { HealthCheckerTypes } = require('../constants');

const server = express();

server.get('/', (_, res) => {
    res.send('Hello ts-node!');
});

server.get('/health-check/liveness', (_, res) => {
    res.send(SimpleHealthCheck());
});

server.get('/health-check/readiness', async (_, res) => {
    res.send(
        await DetailedHealthCheck(),
    );
});

module.exports = server;
