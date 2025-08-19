// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// This route handles GET requests to the root of this router
router.get('/', contactController.getContact);

module.exports = router;