require('dotenv').config()
const Student = require('../Models/Student'); // adjust path if needed
const twilio = require('twilio');

// Twilio credentials from environment
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsAppNumber = 'whatsapp:+14155238886'; // replace with your Twilio WhatsApp number

const client = twilio(accountSid, authToken);

// Function to send WhatsApp message
const sendWhatsAppMessage = async (to, message) => {
    try {
        const result = await client.messages.create({
            body: message,
            from: fromWhatsAppNumber,
            to: `whatsapp:+14155238886` // e.g., whatsapp:+91XXXXXXXXXX
        });
        console.log(`✅ Message sent to ${to}`);
    } catch (err) {
        console.error(`❌ Failed to send to ${to}:`, err.message);
    }
};

// Main function: find due students and send reminders
const sendDueReminders = async () => {
    try {
        const dueStudents = await Student.find({ due: true });

        for (const student of dueStudents) {
            const mobile = student.mobile;
            const name = student.name || 'Student';

            if (!mobile) {
                console.warn(`⚠️ No mobile number for ${name}`);
                continue;
            }

            const message = `👋 Hello ${name}, this is a reminder to please pay your fees. Your account shows dues pending. Kindly pay at the earliest.`;

            await sendWhatsAppMessage(mobile, message);
        }

        console.log(`✅ Processed ${dueStudents.length} due students.`);
    } catch (err) {
        console.error('❌ Error in sendDueReminders:', err.message);
    }
};

module.exports = sendDueReminders;
