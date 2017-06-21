let Sequelize = require('sequelize')

let dbConfig = require('../../../config')
let env = process.env.NODE_ENV || 'development'

const sequelize = new Sequelize(dbConfig[env])

module.exports = sequelize
