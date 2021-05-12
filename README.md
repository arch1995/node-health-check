This will help you track the health of your application and different services used.

# Installation

```
  npm i node-health-check
```

# Simple Health Check

Ex:

```
const { SimpleHealthCheck } = require('node-health-check')

routes.route('/_health/status, (_req, res) => {
  res.send(SimpleHealthCheck());
});

```

This check simply returns a JSON object like this

```
{ status: 'ok' }
```

# Detailed Health Check

You can either pass config to the `DetailedHealthCheck` function or create a file named `health-check.js`.

Ex:

```
const {
  DetailedHealthCheck,
  HealthCheckerTypes
} = require('node-health-check')

routes.route('/_health/status, (_req, res) => {
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

```

`health-check.js`
```
const { HealthCheckerTypes } = require('./index');

module.exports = {
    name         : 'testing application',
    integrations : [
        {
            type        : HealthCheckerTypes.Redis,
            serviceName : 'redis integration',
            url         : 'redis://localhost:6379',
        },
        {
            type        : HealthCheckerTypes.MongoDb,
            serviceName : 'mongodb integration',
            url         : 'localhost:27017/db',
        },
    ],
};
```

This checks returns a JSON object which allows you to check health & status of integrations your application is using.

```
{
    "name": "My node application",
    "status": true,
    "integrations": [
        {
            "service_name": "redis integration",
            "url": "redis://localhost:6379",
            "status": true,
            "response_time": 0.041,
            "error": null
        },
        {
            "service_name": "mongodb integration",
            "url": "localhost:27017/db",
            "status": true,
            "response_time": 0.641,
            "error": null
        }
    ]
}
```

## Available integrations

- [x] Redis
- [x] Mongodb
- [ ] Web integration (https)
- [ ] RabbitMQ
