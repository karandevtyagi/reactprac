const {Seller}=require('../models')
const jwt=require('jsonwebtoken')
const config=require('../config/config')
function jwtSignSeller(seller){
    const ONE_WEEK=60*60*24*7;
    return jwt.sign(seller,config.authentication.jwtSceret,{
        expiresIn:ONE_WEEK
    })
}
module.exports={
  async register(req,res){
    try{   
        const seller = await Seller.create(req.body)
        const sellerJson = seller.toJSON()
    res.send({
        seller: sellerJson,
        token: jwtSignSeller(sellerJson)
      })
    }catch(err){
        res.status(400).send({
            error:'Error occured while registration'
        })
    }
    },
    async login(req,res){
        try{    
        const {email,password}=req.body    
        const seller=await  Seller.findOne({
            where:{
               email:email
            }
            
        })
        if(!seller){
            return res.status(403).send({
                error:"Email is wrong."
            })
        }
        
        const isPasswordValid= await seller.comparePassword(password)
        if(!isPasswordValid){
           return res.status(403).send({
                error:"Password is wrong."
            })
        }
        const sellerJson=seller.toJSON()
        res.send({
            seller:sellerJson,
            token:jwtSignSeller(sellerJson)
        })
        }catch(err){
            res.status(500).send({
                error:"Error occured while log in."
            })
        }
        }
}