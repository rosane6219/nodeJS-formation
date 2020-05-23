var configValues = require('./config')

module.exports = {
    
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.username + ':' + configValues.password + '@localhost:27017/db1'
    }
}