// routes/foodTypes.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM FoodTypes');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve food types' });
    }
});

router.post('/', async (req, res) => {
    const { food_name, shelf_life, category } = req.body;
    try {
        await db.query('INSERT INTO FoodTypes (food_name, shelf_life, category) VALUES (?, ?, ?)', [food_name, shelf_life, category]);
        res.json({ message: 'Food type added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add food type' });
    }
});

module.exports = router;
