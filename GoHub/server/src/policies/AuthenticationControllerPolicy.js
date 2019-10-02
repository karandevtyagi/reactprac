const joi=require('joi')
module.exports={
    register (req,res,next){
        const schema={
            email:joi.string().email(),
            password:joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error}=joi.validate({email:req.body.email,password:req.body.password},schema)
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error:'You must provide a valid email address'
                    })
                    break
                case 'password':
                        res.status(400).send({
                            error:'The password provided failed to match the rules'
                        })
                        break
                default:
                    res.status(400).send({
                        error:'Invalid registration information'
                    })
            }
        }else{
       next()
        }
    }
}