const Student = require('../Models/Student'); // adjust path if needed
const Payment = require('../Models/Payments'); // adjust path if needed
const { findMonthlyFees } = require('../Repo/Repo')

module.exports.makePaymentFuncion = async (data) => {
    try {
        const { instituteId, studentId, paymentAmount } = data;
        console.log(instituteId, "ins")
        
        const student = await Student.findById(studentId);
        const monthlyFees = await findMonthlyFees(studentId)
        if (!student) {
            throw new Error('Student not found');
        }

        // Calculate new values
        const currentDate = new Date();
        const firstPaymentDate = student.firstPaymentDate || currentDate;
        const dueDate = new Date(firstPaymentDate);
        dueDate.setDate(dueDate.getDate() + 30);

        // Update student record
        student.paymentStatus = 'paid';
        student.firstPaymentDate = firstPaymentDate;
        student.dueDate = dueDate;
        student.totalFeesPaid = (Number(student.totalFeesPaid) || 0) + Number(paymentAmount);
        student.dueStatus = false;


        await student.save();

            // ✅ Save to Payment collection using correct field names from your schema
                const paymentRecord = new Payment({
                PayingStudentId: studentId,
                recevingInstitutionId: instituteId, // ✅ fixed case
                paymentAmount,
                paymentDate: currentDate,
            });

            await paymentRecord.save();

        console.log('✅ Payment processed and saved.');
        return paymentRecord;
    } catch (error) {
        console.error('❌ Error in makePaymentFuncion:', error.message);
        throw error; // optional: so the caller can handle the error too
    }
};
