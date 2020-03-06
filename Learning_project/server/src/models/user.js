const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user) {
  const SALT_FACTOR = 8
  if (!user.changed('password')) {
    return
  }
  
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt,null))
    .then((hash)=> {
      user.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username:{
      type:DataTypes.STRING
    },email:{
      type:DataTypes.STRING,
      unique:true
    },
    companyname:{
      type:DataTypes.STRING
    },gstnumber:{
      type:DataTypes.STRING
    },licensenumber:{
      type:DataTypes.STRING
    },password:DataTypes.STRING,
    phonenumber:DataTypes.INTEGER,
    website:DataTypes.STRING,
    logo:DataTypes.TEXT,
    is_verified:DataTypes.TINYINT(1)
  }, 
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}