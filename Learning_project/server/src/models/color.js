module.exports = (sequelize,DataTypes) => {
    const Colors = sequelize.define('Colors', {
        color_name:DataTypes.STRING,
        activation:DataTypes.INTEGER(1)
    })
  
    return Colors
  }