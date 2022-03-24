const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travelerRoutes = require('./travelerRoutes');

router.use('/locations', locationRoutes);
router.use('/travelers', travelerRoutes);

module.exports = router;
