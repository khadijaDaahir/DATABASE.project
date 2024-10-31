// routes/deliveryRecords.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM DeliveryRecords');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve delivery records' });
    }
});

router.post('/', async (req, res) => {
    const { beneficiary_id, food_type_id, distribution_center_id, delivery_date, quantity } = req.body;
    try {
        await db.query('INSERT INTO DeliveryRecords (beneficiary_id, food_type_id, distribution_center_id, delivery_date, quantity) VALUES (?, ?, ?, ?, ?)', [beneficiary_id, food_type_id, distribution_center_id, delivery_date, quantity]);
        res.json({ message: 'Delivery record added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add delivery record' });
    }
});

module.exports = router;
