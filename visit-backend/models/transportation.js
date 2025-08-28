const mongoose = require('mongoose');

const transportationSchema = new mongoose.Schema({
    name: String,
    category: String, 
    description: String,
    image: String,
    website: String 
}, 
{ collection: 'transportation' }
);

module.exports = mongoose.model('Transportation', transportationSchema);
