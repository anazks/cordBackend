const mongoose  = require('mongoose')
const Institute = require('./Institute')
const Course = require('./Course')

const batchSchema = new mongoose.Schema({
    instituteId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Institute',
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    },
    batchName: { 
        type: String,
        required: true 
    },
    moderatorName: {
        type: String,
        required:true,
    }    

},{timestamps:true})

const  Batch = mongoose.model('Batch', batchSchema)
module.exports = Batch