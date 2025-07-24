const Course = require('./Course')
const mongoose = require('mongoose')
const Institute = require('./Institute')

const studentSchema = new mongoose.Schema({
    instituteId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Institute',
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
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
    await Course.findByIdAndUpdate(doc.courseId, {
      $inc: { totalStudents: 1 } // increase by 1
    });
  } catch (err) {
    console.error("Error incrementing totalStudents", err);
  }
});

studentSchema.post('findOneAndDelete', async function (doc) {
  try {
    if (doc?.courseId) {
      await Course.findByIdAndUpdate(doc.courseId, {
        $inc: { totalStudents: -1 } // decrease by 1
      });
    }
  } catch (err) {
    console.error("Error decrementing totalStudents", err);
  }
});

const student = mongoose.model('student',studentSchema)

module.exports = student

