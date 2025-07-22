const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

console.log('=== STARTING SERVER ===');

// Try to import authRouter with error handling
let authRouter;
try {
    authRouter = require('./Auth/Router/authRouter');
    console.log('✅ authRouter imported successfully');
    console.log('authRouter type:', typeof authRouter);
} catch (error) {
    console.error('❌ Error importing authRouter:', error.message);
    console.error('Full error:', error);
}

const dbConnect = require('./dbConfig');
const instituteRouter = require('./Institute/Router/Router');

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Register routes with error handling
if (authRouter) {
    console.log('=== REGISTERING AUTH ROUTER ===');
    app.use('/institute/auth', authRouter);
    console.log('✅ Auth router registered at /institute/auth');
} else {
    console.error('❌ Cannot register authRouter - import failed');
}

app.use('/institute', instituteRouter);

// Rest of your code...
async function db() {
    try {
       await dbConnect();
       console.log('✅ Database connected');
    } catch (error) {
        console.log('❌ Database error:', error);
    }
}

db();

app.listen(port, () => {    
    console.log(`🚀 Server running on port ${port}`);
});