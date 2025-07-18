const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
  // Basic Information
  institutionName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  city: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  district: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  
  // Contact Information
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    match: /^\d{10}$/,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  
  // Authentication
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  
  // Additional Fields (can be added later)
  logo: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    maxlength: 500
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  },
  verificationToken: {
    type: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      delete ret.verificationToken;
      return ret;
    }
  }
});


const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;