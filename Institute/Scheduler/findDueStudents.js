const Student = require('../Models/Student'); // ✅ Capital 'S'

const findDueStudents = async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize time for date-only comparison

    const overdueStudents = await Student.find({
      dueDate: { $lt: today },
      dueStatus: false,
    });

    if (overdueStudents.length === 0) {
      console.log('✅ No overdue students found.');
      return;
    }

    for (const student of overdueStudents) {
      student.dueStatus = true;
      await student.save();
      console.log(`⏰ Updated dueStatus: true for ${student.name || student._id}`);
    }
  } catch (error) {
    console.error('❌ Error while updating dueStatus:', error.message);
  }
};

module.exports = findDueStudents;
