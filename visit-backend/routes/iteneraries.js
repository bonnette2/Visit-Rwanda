const express = require('express');
const router = express.Router();
const Itenerary = require('../models/iteneraries');

router.get('/', async (req, res) => {
    try {
        let filter = {};

        if (req.query.duration) {
            const parsedDuration = parseInt(req.query.duration, 10);
            if (!isNaN(parsedDuration)) {
                filter.duration = parsedDuration; 
            }
        }

        const itineraries = await Itenerary.find(filter);
        res.json(itineraries);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
