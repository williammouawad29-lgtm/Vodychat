'use strict';

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/vodychat'; // Replace with your MongoDB connection string

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

module.exports = mongoose;