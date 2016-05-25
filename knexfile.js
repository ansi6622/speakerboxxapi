// Update with your config settings.
require('dotenv').config();
module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
