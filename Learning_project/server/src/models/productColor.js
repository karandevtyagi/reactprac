module.exports = (sequelize,DataTypes) => {
    const productColor = sequelize.define('productColor', {
      name:DataTypes.STRING,
    })
  
    productColor.associate = function (models) {
      productColor.belongsTo(models.Products)
      productColor.belongsTo(models.Colors)
      productColor.belongsTo(models.Seller)
    }
  
    return productColor
  }