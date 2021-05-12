const server = require('./server');

server.listen(8088, () => {
  console.log(`Running at http://localhost:8088`);
})