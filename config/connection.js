const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mobilku-test', '09bmm2nbj3y3r4qazzzv', 'pscale_pw_pSDK0vNxx29oq5n9zQR3HefogzhFS3AKadIaSYYD6VS', {
    host: 'aws.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,        
        }
    }
  });
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = sequelize