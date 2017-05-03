let Sequelize = require('sequelize')
let connection = require('./sequelize-connection')




module.exports = new Sequelize( 'country', '','', {
  host: 'localhost',
  dialect: 'postgres',
  pool: { // the pool determines how many connections we can have at one time
    max: 5,
    min: 0
  }
})
