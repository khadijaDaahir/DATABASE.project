// routes/distributionCenters.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM DistributionCenters');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve distribution centers' });
    }
});

router.post('/', async (req, res) => {
    const { center_name, location, contact_person, capacity } = req.body;
    try {
        await db.query('INSERT INTO DistributionCenters (center_name, location, contact_person, capacity) VALUES (?, ?, ?, ?)', [center_name, location, contact_person, capacity]);
        res.json({ message: 'Distribution center added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add distribution center' });
    }
});

module.exports = router;
