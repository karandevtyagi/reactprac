const {User}=require('../models')
const jwt=require('jsonwebtoken')
const config=require('../config/config')
function jwtSignUser(user){
    const ONE_WEEK=60*60*24*7;
    return jwt.sign(user,config.authentication.jwtSceret,{
        expiresIn:ONE_WEEK
    })
}
module.exports={
  async register(req,res){
    try{   
        const user = await User.create(req.body)
        const userJson = user.toJSON()
    res.send({
        user: userJson,
        token: jwtSignUser(userJson)
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
        const user=await  User.findOne({
            where:{
               email:email
            }
            
        })
        if(!user){
            return res.status(403).send({
                error:"Email is wrong."
            })
        }
        
        const isPasswordValid= await user.comparePassword(password)
        if(!isPasswordValid){
           return res.status(403).send({
                error:"Password is wrong."
            })
        }
        const userJson=user.toJSON()
        res.send({
            user:userJson,
            token:jwtSignUser(userJson)
        })
        }catch(err){
            res.status(500).send({
                error:"Error occured while log in."
            })
        }
        }
}