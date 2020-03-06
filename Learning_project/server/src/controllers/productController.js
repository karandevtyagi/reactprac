const {Products,productColor,Inventory} =require('../models')
module.exports={
    async index(req,res){
       try{
           const products=await Products.findAll()
           res.send(products)
       }catch(err){
           console.log(err)
           res.status(404).send({
               error:"An error occured while loading products"
           })
       }
    },
    async display(req,res){
        try{
          const product=await Products.findOne({
              where:{
                  id:req.params.productId
              }
          })
          const color=await productColor.findAll({
              where:{
                  ProductId:req.params.productId
              }
          })
          const info=await Inventory.findOne({
                where:{
                    ProductId:req.params.productId
                }
        })
          res.send({product,color,info})
        }catch(err){
            res.status(404).send({
                error:"Unable to load product"
            })
        }
    }
}
