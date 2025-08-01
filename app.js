const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./Auth/Router/authRouter');
const dbConnect = require('./dbConfig');
const instituteRouter = require('./Institute/Router/Router');
const schedule = require('node-schedule');
const findDueStudents = require('./Institute/Scheduler/findDueStudents');
const sendDueReminders =require('./Institute/Scheduler/sendRemainder')


const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.use('/institute/auth',authRouter)
app.use('/institute',instituteRouter)

async function db() {
    try {
       await dbConnect()
    } catch (error) {
        console.log(error)
    }
}

db()

schedule.scheduleJob('0 0 */1 * * *',findDueStudents)
schedule.scheduleJob('0 0 */1 * * *',sendDueReminders)

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});