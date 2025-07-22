const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./Auth/Router/authRouter');
const dbConnect = require('./dbConfig');
const instituteRouter = require('./Institute/Router/Router');

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

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});