const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const branchSchema = new Schema({
    courseName:{
        type:String,
        required:true,
    },
    totalFees:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },

},{timestamps:true})

const Branch = mongoose.model('Branch',branchSchema);

module.exports = Branch