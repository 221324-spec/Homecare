const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a service
router.post('/', async (req, res) => {
  const service = new Service({
    name: req.body.name,
    description: req.body.description,
    icon: req.body.icon,
    details: req.body.details
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a specific service
router.get('/:id', getService, (req, res) => {
  res.json(res.service);
});

// Update a service
router.patch('/:id', getService, async (req, res) => {
  if (req.body.name != null) {
    res.service.name = req.body.name;
  }
  if (req.body.description != null) {
    res.service.description = req.body.description;
  }
  if (req.body.icon != null) {
    res.service.icon = req.body.icon;
  }
  if (req.body.details != null) {
    res.service.details = req.body.details;
  }

  try {
    const updatedService = await res.service.save();
    res.json(updatedService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a service
router.delete('/:id', getService, async (req, res) => {
  try {
    await res.service.remove();
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getService(req, res, next) {
  let service;
  try {
    service = await Service.findById(req.params.id);
    if (service == null) {
      return res.status(404).json({ message: 'Service not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.service = service;
  next();
}

module.exports = router;