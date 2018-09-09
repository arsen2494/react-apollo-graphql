const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
const User = require('./models/User');

require('dotenv').config({path: 'variables.env'});

// Connects to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Initialize app
const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));