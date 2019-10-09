module.exports = (sequelize,DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
     availability:DataTypes.BOOLEAN,
     available_quantity:DataTypes.INTEGER,
     discount_percentage:DataTypes.INTEGER,
     batch:DataTypes.DATE,
     seller_name:DataTypes.STRING
    })
  
    Inventory.associate = function (models) {
      Inventory.belongsTo(models.Products)
      Inventory.belongsTo(models.Seller)
    }
  
    return Inventory
  }