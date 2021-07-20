const express = require('express');
const router = express.Router();

const pdfComponent = require('../controllers/pdf');

router.post('/', pdfComponent);

module.exports = router;
