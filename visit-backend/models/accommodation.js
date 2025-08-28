const mongoose = require('mongoose');
const accommodationSchema = new mongoose.Schema({
    name: String,
    category: String, 
    description: String,
    image: String,
    website: String
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
