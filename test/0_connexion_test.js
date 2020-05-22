const mongoose = require('mongoose')
const config = require('../config/index')

before(function(done){

    //Connect to MongoDB
    mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true, useUnifiedTopology: true})

    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks !')
        done()
    }).on('error', function(error){
        console.log('Connection error:\n', error)
    })

})