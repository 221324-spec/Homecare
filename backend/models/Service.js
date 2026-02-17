const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
  details: {
    whatWeOffer: [String],
    idealFor: String,
    howDelivered: String,
    safety: String
  }
});

module.exports = mongoose.model('Service', serviceSchema);