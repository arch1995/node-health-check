const server = require('./server');

const PORT = 8088;

server.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
});
