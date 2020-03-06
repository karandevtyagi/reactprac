const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (seller) {
  const SALT_FACTOR = 8
  if (!seller.changed('password')) {
    return
  }
  
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(seller.password, salt,null))
    .then((hash)=> {
      seller.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define('Seller', {
    sellername:{
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
    is_verified:DataTypes.TINYINT(1)
  }, 
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  })

  Seller.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return Seller
}