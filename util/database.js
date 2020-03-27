const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'uef20220721',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;