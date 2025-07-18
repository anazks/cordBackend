const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
  // Basic Information
  institute_id:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  establishedYear: {
    type: String,
    required: true,
    match: /^\d{4}$/
  },
  registrationNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Private Educational Institute', 'Public Educational Institute', 'University', 'Other'],
    default: 'Private Educational Institute'
  },

  // Address Information
  address: {
    street: {
      type: String,
      required: true,
      trim: true
    },
    area: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    pincode: {
      type: String,
      required: true,
      match: /^\d{6}$/
    },
    country: {
      type: String,
      required: true,
      default: 'India'
    }
  },

  // Contact Information
  contact: {
    phone: {
      type: String,
      required: true,
      match: /^\+?\d{10,15}$/
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    website: {
      type: String,
      match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    },
    fax: {
      type: String,
      match: /^\+?\d{10,15}$/
    }
  },

  // Institutional Details
  details: {
    totalStudents: {
      type: Number,
      min: 0,
      default: 0
    },
    totalFaculty: {
      type: Number,
      min: 0,
      default: 0
    },
    totalCourses: {
      type: Number,
      min: 0,
      default: 0
    },
    totalBatches: {
      type: Number,
      min: 0,
      default: 0
    },
    accreditation: {
      type: String,
      trim: true
    },
    affiliation: {
      type: String,
      trim: true
    }
  },

  // Facilities
  facilities: [{
    type: String,
    trim: true
  }],

  // Operating Hours
  timings: {
    weekdays: {
      type: String,
      default: '8:00 AM - 6:00 PM'
    },
    saturday: {
      type: String,
      default: '8:00 AM - 2:00 PM'
    },
    sunday: {
      type: String,
      default: 'Closed'
    }
  },

  // Metadata
  logoUrl: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'active'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});


const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;