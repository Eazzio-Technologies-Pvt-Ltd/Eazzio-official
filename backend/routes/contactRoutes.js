const express = require('express');
const router = express.Router();
const { handleContactSubmit } = require('../controllers/contactController');

router.post('/contact', handleContactSubmit);

module.exports = router;
