const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Admin credentials come from env with safe defaults for quick testing
const ADMIN_USER = (process.env.ADMIN_USER || 'admin').toString();
const ADMIN_PASS = (process.env.ADMIN_PASS || 'admin123').toString();

function checkBasicAuth(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) return false;
  const b = auth.slice(6);
  let decoded;
  try {
    decoded = Buffer.from(b, 'base64').toString('utf8');
  } catch (e) {
    return false;
  }
  const [user, pass] = decoded.split(':');
  if (!user || !pass) return false;
  return user === ADMIN_USER && pass === ADMIN_PASS;
}

// GET /api/admin/bookings - protected with Basic auth
router.get('/bookings', async (req, res) => {
  if (!checkBasicAuth(req)) {
    res.set('WWW-Authenticate', 'Basic realm="Admin"');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(100);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Failed to load bookings' });
  }
});

module.exports = router;
