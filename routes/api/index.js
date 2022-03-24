const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');

router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);

module.exports = router;