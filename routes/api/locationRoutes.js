const router = require('express').Router();
const { traveler, location, trips } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// CREATE a location
router.post('/', async (req, res) => {
  try {
    const locationData = await location.create({
      location_id: req.body.location_id,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;