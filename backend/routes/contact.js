const express = require('express');
const router = express.Router();
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
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
  } catch (err) {
    console.warn('Failed to create mail transporter in contact route:', err && err.message);
  }
}

// POST / - receive contact form submissions
router.post('/', async (req, res) => {
  const { name, email, phone, subject, message, formType } = req.body || {};

  if (!message && !email && !phone) {
    return res.status(400).json({ message: 'At least one of message, email or phone is required' });
  }

  // Build a friendly email body
  const bodyLines = [];
  if (formType) bodyLines.push(`Form: ${formType}`);
  if (name) bodyLines.push(`Name: ${name}`);
  if (email) bodyLines.push(`Email: ${email}`);
  if (phone) bodyLines.push(`Phone: ${phone}`);
  if (subject) bodyLines.push(`Subject: ${subject}`);
  if (message) bodyLines.push('', 'Message:', message);

  const textBody = bodyLines.join('\n');

  // Send email if SMTP configured
  if (mailTransporter && adminEmailTo) {
    const mailOptions = {
      from: smtpUser,
      to: adminEmailTo,
      subject: subject || `New contact form submission${formType ? ` (${formType})` : ''}`,
      text: textBody
    };

    try {
      await mailTransporter.sendMail(mailOptions);
      console.log('Contact form email sent to', adminEmailTo);
      return res.status(200).json({ message: 'Contact submission received and emailed to admin' });
    } catch (err) {
      console.error('Failed to send contact email:', err && err.message);
      // Still return success to not leak SMTP errors to users
      return res.status(200).json({ message: 'Contact submission received (email failed)' });
    }
  }

  // Fallback: no SMTP — just log and respond success
  console.log('Contact submission (no SMTP configured):', textBody);
  return res.status(200).json({ message: 'Contact submission received' });
});

module.exports = router;
