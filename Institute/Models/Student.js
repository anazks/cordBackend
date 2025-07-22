const Branch = require('./Branch')
const mongoose = require('mongoose')
const Institute = require('./Institute')

const studentSchema = new mongoose.Schema({
    instituteId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Institute',
        required:true
    },
    branchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobile:{
      type:String,
      requied:true,

    },
    totalFeesPaid:{
        type:String,
    }
},{timestamps:true})

studentSchema.post('save', async function (doc) {
  try {
    await Branch.findByIdAndUpdate(doc.branchId, {
      $inc: { totalStudents: 1 } // increase by 1
    });
  } catch (err) {
    console.error("Error incrementing totalStudents", err);
  }
});

studentSchema.post('findOneAndDelete', async function (doc) {
  try {
    if (doc?.branchId) {
      await Branch.findByIdAndUpdate(doc.branchId, {
        $inc: { totalStudents: -1 } // decrease by 1
      });
    }
  } catch (err) {
    console.error("Error decrementing totalStudents", err);
  }
});

const student = mongoose.model('student',studentSchema)

module.exports = student

