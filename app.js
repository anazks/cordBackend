const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./Auth/Router/authRouter');
const institutionRouter = require('./Auth/Router/authRouter');
const dbConnect = require('./dbConfig');

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.use('/Auth/owner',institutionRouter)

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