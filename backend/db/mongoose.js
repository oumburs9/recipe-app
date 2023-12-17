const mongoose = require('mongoose');
const config = require('../config/config');

const url = config.database.url;

mongoose
  .connect(url)
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((error) => {
    console.error(error);
  });
