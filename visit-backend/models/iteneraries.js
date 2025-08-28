const mongoose = require('mongoose');

const itenerarySchema = new mongoose.Schema({
    day: String,
    name: String,
    category: String, 
    description: String,
    image: String,
    website: String 
}, 
{ collection: 'iteneraries' }
);

module.exports = mongoose.model('Itenerary', itenerarySchema);
