const express = require('express');
const router = express.Router();
const Accommodation = require('../models/accommodation');
router.get('/:category', async (req, res) => {
    const data = await Accommodation.find({ category: req.params.category });
    res.json(data);
});

module.exports = router;
