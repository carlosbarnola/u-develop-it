const mysql = require('mysql2');
const pssw = require('../per/pssw');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: pssw,
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;