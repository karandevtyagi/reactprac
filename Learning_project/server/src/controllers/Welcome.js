const {User}=require('../models')
module.exports=
{
 async index(req,res){
   try{
   const user=await User.findOne({
     where:{
       id:req.user.id
     },
     attributes:{
     exclude:['password']
   
    } })
   res.send(user.toJSON())

 }catch(err){
   console.log(err)
       res.status(500).send('SERVER ERROR') 
 }
}
}