let Sequelize = require('sequelize')

let db = require('./db')

const User = db.define('user', {
  email: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
})

User.sync({force: true}).then(() => {
  return User.create({
    firstName: 'Andres',
    lastName: 'Valderrama'
  })
})
