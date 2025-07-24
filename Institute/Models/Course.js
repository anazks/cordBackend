const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const institute = require('../Models/Institute')

const courseSchema = new Schema({
    instituteId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:institute,
        required:true
    },
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
    totalStudents:{
        type:Number,
        default:0
    }

},{timestamps:true})

const Course = mongoose.model('Course',courseSchema);

module.exports = Course;