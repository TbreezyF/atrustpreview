const express = require('express');
const router = express.Router();
const path = require('path');

/*START ROUTES*/

router.get('/', (req, res) => {
    res.status(200).render('index');
});

router.get('/listings', (req, res) => {
    res.status(200).render('listings');
});

router.get('/car-details', (req, res) => {
    res.status(200).render('car-details');
});

/*END ROUTES*/

module.exports = router;