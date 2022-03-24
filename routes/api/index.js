const router = require('express').Router();

const locationRoutes = require('./locationRoutes');
const travelersRoutes = require('./travelersRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/locations', locationRoutes);
router.use('/travelers', travelersRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;


router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);

module.exports = router;
