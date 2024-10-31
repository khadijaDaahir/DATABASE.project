// routes/beneficiaries.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Beneficiaries');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve beneficiaries' });
    }
});

router.post('/', async (req, res) => {
    const { name, contact_info, address, household_size } = req.body;
    try {
        await db.query('INSERT INTO Beneficiaries (name, contact_info, address, household_size) VALUES (?, ?, ?, ?)', [name, contact_info, address, household_size]);
        res.json({ message: 'Beneficiary added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add beneficiary' });
    }
});

module.exports = router;
