const {Products,Inventory,productColor} =require('../models')
module.exports={
    async addProduct(req,res){
         try{ 
             const {availability,available_quantity,batch,seller_name}=req.body.inventory
             const sellerid=req.user.id
             const product =await Products.create(req.body.product)
             const inventory=await Inventory.create({
                 SellerId:sellerid,
                 availability:availability,
                 available_quantity:available_quantity,
                 batch:batch,
                 seller_name:seller_name,
                 ProductId:product['id']
             })
             const {colorid,name}=req.body.color
              const color=await productColor.create({
                  SellerId:sellerid,
                  ProductId:product['id'],
                  ColorId:colorid,
                  name:name
              })
             res.send({product,inventory,color})
         }catch(err){
            res.status(500).send({
                error:"Unable to add Product"
            })
         }
    },
    async removeColor(req,res){
        try{
            const  sellerid=req.user.id;
            const {colorid,productid}=req.body
            const color=await productColor.findOne({
                where:{
                    ColorId:colorid,
                    SellerId:sellerid,
                    ProductId:productid
                }
            })
            if (!color) {
              return res.status(403).send({
                error: 'you do not have access to this color'
              })
            }
            await color.destroy();
            res.send(color)
        }catch(err){
            res.status(500).send({
                error:"Error occured try later"
            }) 
        }
    },
    async addColor(req,res){
        try{
            const  sellerid=req.user.id;
            const {colorid,productid,name}=req.body
            const color=await productColor.create({
                    ColorId:colorid,
                    SellerId:sellerid,
                    ProductId:productid,
                    name:name
            })
            res.send(color)
        }catch(err){
            res.status(500).send({
                error:"Error occured try later"
            }) 
        }
    },
    async updateProduct(req,res){
        try{ 
            const {availability,available_quantity,batch,productid}=req.body.inventory
            const sellerid=req.user.id
            const product =await Products.update(req.body.product,{
                where:{
                   id:productid
                }
            })
            const inventory=await Inventory.update({
                availability:availability,
                available_quantity:available_quantity,
                batch:batch,
            },
             {
                 where:{
                SellerId:sellerid,
                ProductId:productid
                 }
            })
            const {colorid,name}=req.body.color
             const color=await productColor.update({
                 ColorId:colorid,
                 name:name
             },
             {
                 where:{
                SellerId:sellerid,
                ProductId:productid
                 }
            })
            res.send({product,inventory,color})
        }catch(err){
           res.status(500).send({
               error:"Unable to update Product"
           })
        }
    }
}
