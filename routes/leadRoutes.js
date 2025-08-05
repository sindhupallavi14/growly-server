const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// POST route to save a lead
router.post('/', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json({ message: 'Lead saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save lead' });
  }
});

// GET route to view leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

module.exports = router;
