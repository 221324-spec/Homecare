const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String },
  serviceRequired: { type: String, required: true },
  patientCondition: { type: String },
  location: { type: String },
  preferredTime: { type: String }, // Changed from Date to String
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);