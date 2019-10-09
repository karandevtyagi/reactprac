module.exports={
    port:process.env.PORT || 8081,
    db:{
        database:process.env.DB_NAME || 'gohub',
        user:process.env.DB_USER || 'gohubuser',
        password:process.env.DB_PASS || 'pass',
        options:{
         dialect:process.env.DIALECT || 'mysql',
            host:process.env.HOST || 'localhost'        
        }
    },
    authentication:{
        jwtSceret:process.env.JWT_SCERET || 'sceret'
    }
}