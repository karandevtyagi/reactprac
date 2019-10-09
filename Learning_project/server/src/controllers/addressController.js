const {UserAddresses} = require('../models')
  module.exports={
      async index(req,res){
          try{
            const  userid=req.user.id;
            const address=await UserAddresses.findAll({
                where:{
                    'userid':userid
                }
            })
            res.send(address)
          }catch(err){
              res.status( 500).send({
                  error:"Unable to load Address"
              })
          }
      }, 
      async show(req,res){
        try{
          const  userid=req.user.id;
          const {addressId}=req.params;
          const address=await UserAddresses.findOne({
              where:{
                userid:userid,
                id:addressId,
              }
          })
          res.send(address)
        }catch(err){
            res.status( 500).send({
                error:"Unable to view Address"
            })
        }
    },
      async post(req,res){
          try{
            const  userid=req.user.id;
            req.body['userid']=userid
              const address=await UserAddresses.create(req.body);
              res.send(address)
          }catch(err){
            res.status(400).send({
                error:'Error occured while adding new address'
            })
          }
      },
      async update(req,res){
          try{
            const  userid=req.user.id;
            const {addressId}=req.params;
            const address=await UserAddresses.update(req.body,{
                where:{
                    userid:userid,
                    id:addressId,
                }
            })
            res.send(address)
          }catch(err){
            res.status(500).send({
                error:"An error occured while updating your address"
            })
          }
      },
      async remove(req,res){
          try{
            const  userid=req.user.id;
            const {addressId}=req.params;
            const address = await UserAddresses.findOne({
                where: {
                    userid:userid,
                    id:addressId,
                }
              })
              if (!address) {
                return res.status(403).send({
                  error: 'you do not have access to this address'
                })
              }
              await address.destroy();
              res.send(address)
          }catch(err){
            res.status(500).send({
                error:"An error occured while deleting your address"
            })
          }
      }
  }