const Sequelize = require('sequelize');

const config = require('./../configs/configs');

const connection = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    dialect: 'mysql',
    logging: true
});

module.exports = connection;