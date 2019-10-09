module.exports = (sequelize,DataTypes) => {
    const Cart = sequelize.define('Cart', {
      quantity:DataTypes.INTEGER,
      seller:DataTypes.STRING,
      color:DataTypes.STRING
    })
  
    Cart.associate = function (models) {
      Cart.belongsTo(models.Products)
      Cart.belongsTo(models.User)
    }
  
    return Cart
  }