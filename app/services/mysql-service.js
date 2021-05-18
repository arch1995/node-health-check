const mysql = require('mysql2/promise');

// const { Defaults } = require('../constants');

async function checkMysqlClient(config) {
    const connection = await mysql.createConnection({
        host     : config.host,
        user     : config.user,
        database : config.database,
        password : config.password,
    });
    await connection.execute('SELECT 1+1 ');
    connection.close();
}

module.exports = checkMysqlClient;
