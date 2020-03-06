module.exports = (sequelize,DataTypes) => {
    const Products = sequelize.define('Products', {
        name:DataTypes.STRING,
        type:DataTypes.STRING,
        size:DataTypes.STRING,
        photo1:DataTypes.TEXT,
        photo2:DataTypes.TEXT,
        photo3:DataTypes.TEXT,
        videolink:DataTypes.STRING,
        rate:DataTypes.DOUBLE,
        Description:DataTypes.TEXT,

    })
  
    return Products
  }