const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
// Nodemailer email notification (optional)
const nodemailer = require('nodemailer');
const smtpHost = process.env.SMTP_HOST && process.env.SMTP_HOST.trim();
const smtpPort = process.env.SMTP_PORT && process.env.SMTP_PORT.trim();
const smtpUser = process.env.SMTP_USER && process.env.SMTP_USER.trim();
const smtpPass = process.env.SMTP_PASS && process.env.SMTP_PASS.trim();
const adminEmailTo = process.env.ADMIN_EMAIL_TO && process.env.ADMIN_EMAIL_TO.trim();
let mailTransporter = null;
if (smtpHost && smtpPort && smtpUser && smtpPass) {
  try {
    mailTransporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
  } catch (err) {
    console.warn('Failed to create mail transporter:', err.message);
  }
}
console.log('Mail transporter created:', !!mailTransporter, smtpUser ? `user=${smtpUser}` : 'no-smtp');

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a booking
router.post('/', async (req, res) => {
  console.log('Received booking POST:', req.body);
  // Basic validation
  const { fullName, phoneNumber, serviceRequired } = req.body || {};
  if (!fullName || !phoneNumber || !serviceRequired) {
    return res.status(400).json({ message: 'fullName, phoneNumber and serviceRequired are required' });
  }
  const booking = new Booking({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    serviceRequired: req.body.serviceRequired,
    patientCondition: req.body.patientCondition,
    location: req.body.location,
    preferredTime: req.body.preferredTime
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);

    console.log('Attempting to send email...');
    // Send email notification to admin if SMTP configured
    if (mailTransporter && adminEmailTo) {
      const mailOptions = {
        from: smtpUser,
        to: adminEmailTo,
        subject: 'New Booking Submission',
        text: `New booking received:\nName: ${newBooking.fullName}\nEmail: ${newBooking.email || 'N/A'}\nPhone: ${newBooking.phoneNumber || 'N/A'}\nService: ${newBooking.serviceRequired || 'N/A'}\nTime: ${newBooking.preferredTime || 'N/A'}\nLocation: ${newBooking.location || 'N/A'}`
      };
      try {
        await mailTransporter.sendMail(mailOptions);
        console.log('Email notification sent to', adminEmailTo);
      } catch (err) {
        console.error('Failed to send email notification:', err);
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a specific booking
router.get('/:id', getBooking, (req, res) => {
  res.json(res.booking);
});

// Update a booking
router.patch('/:id', getBooking, async (req, res) => {
  if (req.body.fullName != null) {
    res.booking.fullName = req.body.fullName;
  }
  if (req.body.phoneNumber != null) {
    res.booking.phoneNumber = req.body.phoneNumber;
  }
  if (req.body.email != null) {
    res.booking.email = req.body.email;
  }
  if (req.body.serviceRequired != null) {
    res.booking.serviceRequired = req.body.serviceRequired;
  }
  if (req.body.patientCondition != null) {
    res.booking.patientCondition = req.body.patientCondition;
  }
  if (req.body.location != null) {
    res.booking.location = req.body.location;
  }
  if (req.body.preferredTime != null) {
    res.booking.preferredTime = req.body.preferredTime;
  }
  if (req.body.status != null) {
    res.booking.status = req.body.status;
  }

  try {
    const updatedBooking = await res.booking.save();
    res.json(updatedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a booking
router.delete('/:id', getBooking, async (req, res) => {
  try {
    await res.booking.remove();
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBooking(req, res, next) {
  let booking;
  try {
    booking = await Booking.findById(req.params.id);
    if (booking == null) {
      return res.status(404).json({ message: 'Booking not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.booking = booking;
  next();
}

module.exports = router;