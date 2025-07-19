const mongoose = require('mongoose');
// require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:123@cluster0.sz7m0.mongodb.net/cord?retryWrites=true&w=majority&appName=Cluster0');
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

module.exports = dbConnection;
