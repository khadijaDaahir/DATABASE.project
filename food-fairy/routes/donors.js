const express = require('express');
const router = express.Router();
const db = require('../../db');

router.post('/', (req, res) => {
    const { name, contact_info, address, donation_date } = req.body;
    const query = `INSERT INTO FoodDonors (name, contact_info, address, donation_date) VALUES (?, ?, ?, ?)`;
    db.query(query, [name, contact_info, address, donation_date], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name, contact_info, address, donation_date });
    });
});

router.get('/', (req, res) => {
    const query = `SELECT * FROM FoodDonors`;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, contact_info, address, donation_date } = req.body;
    const query = `UPDATE FoodDonors SET name = ?, contact_info = ?, address = ?, donation_date = ? WHERE id = ?`;
    db.query(query, [name, contact_info, address, donation_date, id], (err) => {
        if (err) throw err;
        res.json({ message: "Donor updated successfully" });
    });
});

// Delete Donor
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM FoodDonors WHERE id = ?`;
    db.query(query, [id], (err) => {
        if (err) throw err;
        res.json({ message: "Donor deleted successfully" });
    });
});

module.exports = router;
