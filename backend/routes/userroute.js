const express = require('express');
const router =express.Router();
const usercontrol = require('../controllers/usercontroller.js');

router.use('/test',usercontrol);

module.exports = router;