const {User}=require('../models')
module.exports={
    async index(req,res){
       const  userid=req.user.id;
        try{
        await User.update(req.body,{
            where:{
                id:userid
            }
        })
        res.send(req.body)
    }catch(err){
        res.status(500).send({
            error:"An error occured while updating your profile"
        })
    }
},
async passwordUpdate(req,res){
    const userid=req.user.id
    try{
        await User.update({
            password:req.body.password
        },{
            where:{
                id:userid
            }
        })
    }catch(err){
        res.status(500).send({
            error:"Unable to update password,try again after sometime"
        })
    }
}

}
