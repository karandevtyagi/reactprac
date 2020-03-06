module.exports = (sequelize,DataTypes) => {
    const Orders = sequelize.define('Orders', {
        order_id:DataTypes.STRING,
        productname:DataTypes.STRING,
        delivery_address:DataTypes.STRING,
        phone_number:DataTypes.INTEGER,
        size:DataTypes.STRING,
        color:DataTypes.STRING,
        rate:DataTypes.DOUBLE,
        seller:DataTypes.STRING,
        invoice:DataTypes.TEXT,
        status:DataTypes.STRING,
        product_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Products',
                key:'id'
            }
        }

    })
  
    return Orders
  }