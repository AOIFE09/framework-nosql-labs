const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// The single slash here represents the '/about' path
router.get('/', aboutController.getAbout);

module.exports = router;