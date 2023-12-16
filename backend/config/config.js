require('dotenv').config();

module.exports = {
  database: {
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017/node-api-todos',
  },
  server: {
    port: process.env.PORT || 4000,
  },
};
