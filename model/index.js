const configDB = require('../database/config.db');
const {Sequelize} = require('sequelize');

const db = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
    dialect: configDB.dialect,
    host: configDB.filePath
})


module.exports = db;