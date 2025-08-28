const mongoose = require('mongoose');
const destinationSchema = new mongoose.Schema({
    name: String,
    category: String, 
    description: String,
    image: String,
    website: String
});

module.exports = mongoose.model('Destination', destinationSchema);
