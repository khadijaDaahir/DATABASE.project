
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'FarmMarketTrackerDB'
});

connection.connect((error) => {
    if (error) {
        console.error('Database connection failed:', error);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;
