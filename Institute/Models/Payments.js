const mongoose = require('mongoose')
const Student = require('./Student')

const paymentSchema = new mongoose.Schema({
   PayingStudentId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Student'
   },
   recevingInstitutionId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Institution'
   },
   paymentAmount:{
    type:Number,
   },
   paymentDate:{
    type:Date
   }
    
})

const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment