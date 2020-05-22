const assert = require('assert')
const mongoose = require('mongoose')
const Product = require('../models/product')

describe('Saving products to database', function(){
    
    before(function(done){
        mongoose.connection.collections.products.drop(function(){
            mongoose.connection.collections.orders.drop(function(){
                done()
            })
        })
    })

    const smartphone0 = new Product({
        productType: 'Smartphone',
        name: 'Galaxy S20',
        price: 150000,
    })
    it('Saves products to the database', function(done){
        Product.collection.insert(smartphone0, function(err){
            assert(err === null)
            done()
        })
    })
})
