const express = require('express');
const router = express.Router();
const { analyzeProfile } = require('../controllers/portfolioController');

router.post('/profile', analyzeProfile);

module.exports = router;