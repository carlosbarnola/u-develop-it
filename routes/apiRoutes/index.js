const express = require('express');
const router = express.Router();

//Router setup
router.use(require('./candidatesRoutes'));
router.use(require('./partyRoutes'));


module.exports = router;
