const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
})

const user= mongoose.model('USER',userSchema);

module.exports= user;