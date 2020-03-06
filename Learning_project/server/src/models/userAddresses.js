module.exports = (sequelize,DataTypes) => {
    const UserAddresses = sequelize.define('UserAddresses', {
      userid:DataTypes.INTEGER,
      name:DataTypes.STRING,
      mobilenumber:DataTypes.INTEGER,
      pincode:DataTypes.INTEGER,
      house:DataTypes.STRING,
      colony:DataTypes.STRING,
      landmark:DataTypes.STRING,
      city:DataTypes.STRING,
      state:DataTypes.STRING,
      country:DataTypes.STRING,
    })
  
    return UserAddresses
  }