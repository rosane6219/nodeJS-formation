var configValues = require('./config')

module.exports = {
    
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.username + ':' + configValues.pwd + '@localhost:27017/db1'
    }
}