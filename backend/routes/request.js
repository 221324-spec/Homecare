const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
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
      secure: Number(smtpPort) === 465,
      auth: { user: smtpUser, pass: smtpPass }
    });
  } catch (err) {
    console.warn('Failed to create mail transporter in request route:', err && err.message);
  }
}

// POST / - quick request from hero/quick-booking
router.post('/', async (req, res) => {
  console.log('Quick request POST received:', JSON.stringify(req.body));
  console.log('Mail transporter present:', !!mailTransporter, 'adminEmailTo=', !!adminEmailTo);
  const { fullName, phoneNumber, email, serviceRequired, preferredTime, location } = req.body || {};

  if (!fullName || !phoneNumber || !serviceRequired) {
    return res.status(400).json({ message: 'fullName, phoneNumber and serviceRequired are required' });
  }

  const booking = new Booking({ fullName, phoneNumber, email, serviceRequired, preferredTime, location });
  try {
    const saved = await booking.save();

    // Send email notification if configured
    let emailSent = false;
    let mailError = null;
    if (mailTransporter && adminEmailTo) {
      const mailOptions = {
        from: smtpUser,
        to: adminEmailTo,
        subject: `Quick request: ${serviceRequired}`,
        text: `New quick request:\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email || 'N/A'}\nService: ${serviceRequired}\nTime: ${preferredTime || 'N/A'}\nLocation: ${location || 'N/A'}`
      };
      try {
        const info = await mailTransporter.sendMail(mailOptions);
        console.log('Quick request email sent to', adminEmailTo, 'info=', info && info.response);
        emailSent = true;
      } catch (err) {
        mailError = (err && err.message) || String(err);
        console.error('Failed to send quick request email:', mailError);
      }
    } else {
      console.log('Quick request received (no SMTP):', saved);
    }

    return res.status(201).json({ message: 'Request received', booking: saved, emailSent, mailError });
  } catch (err) {
    console.error('Failed to save quick request:', err && err.message);
    return res.status(500).json({ message: 'Failed to save request' });
  }
});

module.exports = router;
