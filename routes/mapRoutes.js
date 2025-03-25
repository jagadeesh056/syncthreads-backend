const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    res.json({ map: 'India Map', location: 'Current Location' });
});

module.exports = router;
