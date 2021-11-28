const express = require('express');
const router = express.Router();

//Router setup
router.use(require('./candidatesRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./votersRoutes'));


module.exports = router;
