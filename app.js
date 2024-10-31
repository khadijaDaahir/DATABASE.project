
const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');

app.use(express.json());

app.use('/donors', require('./food-fairy/routes/donors'));
app.use('/beneficiaries', require('./food-fairy/routes/beneficiaries'));
app.use('/distribution-centers', require('./food-fairy/routes/distributionCenters'));
app.use('/food-types', require('./food-fairy/routes/foodTypes'));
app.use('/delivery-records', require('./food-fairy/routes/deliveryRecords'));

app.get('/', (req, res) => {
    res.send('Welcome to the Food Fairy Backend API!');
});




app.get('/deliveryRecord', (req, res) => {
    const query = 'SELECT * FROM DeliveryRecords';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching delivery records:', error);
            res.status(500).send('An error occurred while fetching delivery records.');
        } else {
            res.json(results);
        }
    });
});



app.get('/foodTypes', (req, res) => {
    const query = 'SELECT * FROM FoodTypes';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching food types:', error);
            res.status(500).send('An error occurred while fetching food types.');
        } else {
            res.json(results);
        }
    });
});



app.get('/distributionCenters', (req, res) => {
    const query = 'SELECT * FROM DistributionCenters';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching distribution centers:', error);
            res.status(500).send('An error occurred while fetching distribution centers.');
        } else {
            res.json(results);
        }
    });
});


app.get('/beneficiaries', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM Beneficiaries');
        res.json(results);
    } catch (error) {
        console.error('Error fetching beneficiaries:', error);
        res.status(500).json({ error: 'Failed to retrieve beneficiaries', details: error.message });
    }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
