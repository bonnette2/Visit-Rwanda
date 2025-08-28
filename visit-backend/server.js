const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const app = express();
app.use('/imgs', express.static(path.join(__dirname, 'src/imgs')));
const accommodationRoutes = require('./routes/accomodation');
const destinationRoutes = require('./routes/destination');
const itenerariesRoutes = require('./routes/iteneraries');
const iteneraryRoutes = require('./routes/iteneraries');
const transportationRoutes = require('./routes/transport');


app.use(cors());
app.use(express.json());
app.use('/api/accomodation', accommodationRoutes);
app.use('/api/destination', destinationRoutes);
app.use('/api/iteneraries', itenerariesRoutes);
app.use('/iteneraries', iteneraryRoutes);
app.use('/api/transport', transportationRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected!');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => console.error(err));