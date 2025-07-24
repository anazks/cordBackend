const mongoose = require('mongoose')

const paymentSchema = new paymentSchema({
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String,
        required:true
    },
    
})