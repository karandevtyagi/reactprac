const {Cart,Products} =require('../models')
const _ = require('lodash')
module.exports={
    async index(req,res){
       try{
        const  userid=req.user.id;
           const cart=await Cart.findAll({
               where:{
                userid:userid
               },
               include:[{
                model:Products,
                attributes:{
                  exclude:['photo2','photo3','size','Description','videolink']
                }
              }
              ]
           }).map(cart=>cart.toJSON())
           .map(cart=>_.extend({},cart.Products,cart))
           res.send(cart)
       }catch(err){
           console.log(err)
           res.status(404).send({
               error:"An error occured while loading Cart"
           })
       }
    },
    async post(req,res){
         try{            

            const  userid=req.user.id;
            const {quantity,productid,seller,color}=req.body
            const cart = await Cart.findOne({
                where: {
                  ProductId:productid,
                  UserId:userid
                }
              })
              if (cart) {
                return res.status(400).send({
                  error: 'you already have this set as a cart'
                })
              }
             const newcart =await Cart.create({
                 UserId:userid,
                 quantity:quantity,
                 ProductId:productid,
                 seller:seller,
                 color:color
             })
             res.send(newcart)
         }catch(err){
             console.log(err)
            res.status(500).send({
                error:"Unable to add cart"
            })
         }
    },
    async remove(req,res){
        try{
          const  userid=req.user.id;
          const {cartId}=req.params;
          const cartItem = await Cart.findOne({
              where: {
                  userid:userid,
                  id:cartId,
              }
            })
            if (!cartItem) {
              return res.status(403).send({
                error: 'you do not have access to this cart item'
              })
            }
            await cartItem.destroy();
            res.send(cartItem)
        }catch(err){
          res.status(500).send({
              error:"An error occured while deleting your cart item"
          })
        }
    }
}
