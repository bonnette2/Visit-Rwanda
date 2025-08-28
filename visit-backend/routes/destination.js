const express = require('express');
const router = express.Router();
const destination = require('../models/destination');
router.get('/:category', async (req, res) => {
    const data = await destination.find({ category: req.params.category });
    res.json(data);
});

module.exports = router;
