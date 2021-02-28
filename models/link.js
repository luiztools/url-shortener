const Sequelize = require('sequelize');
const database = require('../db');

const Link = database.define('link', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
    }
})

module.exports = Link;