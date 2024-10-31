
const express = require('express');
const app = express();
const db = require('./db'); // Assuming you have db.js set up for your MySQL connection

// Route for Crop Types
app.get('/crops', async (req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM CropTypes');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve crops' });
    }
});

// Route for Yields
app.get('/yields', async (req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM Yields');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve yields' });
    }
});


// Route for Local Market Prices
app.get('/marketPrices', async (req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM MarketPrices');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve market prices' });
    }
});

// Route for Best Markets
app.get('/bestMarkets', async (req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM BestMarkets');
        res.json(rows);



    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve best markets' });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
