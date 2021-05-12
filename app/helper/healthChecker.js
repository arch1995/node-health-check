const path = require('path');

const loadConfig = () => {
    const data = require(path.resolve(process.cwd(), 'health-check.js'));
    return {
        name         : data.name || '',
        integrations : data.integrations || [],
    };
};

module.exports = {
    loadConfig,
};
