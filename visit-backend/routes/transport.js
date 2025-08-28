const express = require('express');
const router = express.Router();
const Transportation = require('../models/transportation');

router.get('/', async (req, res) => {
  try {
    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category; // ✅ matches schema
    }

    const transportations = await Transportation.find(filter);
    res.json(transportations);

  } catch (err) {
    console.error('Error fetching transportation:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
