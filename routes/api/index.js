const router = require('express').Router();
const readerRoutes = require('./locationRoutes');
const libraryCardRoutes = require('./travellerRoutes');

router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);

module.exports = router;
