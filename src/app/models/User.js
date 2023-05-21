const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    cart : [{
        name: {type: String},
        product_id: {type: String}, 
        qty: {type : Number},
        price: {type: Number}
    }],
    purchased:[{
        name: {type: String},
        product_id: {type: String}, 
        qty: {type : Number},
        price: {type: Number}
    }]
    // cart: {type: [{string}]}
},{
    timestamps: true
});

module.exports = mongoose.model('User', User);
