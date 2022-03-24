const router = require('express').Router();
const { Location , Trips  } = require('../../models');

// GET all traveller data without associated trips
// /api/travellers
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({
      include: [{ model: Location }, {model: Trips}],
    });
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single traveller's data with their associated trips
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Trips }],
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a traveller data
router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create({
      traveller_id: req.body.traveller_id,
      location_id: req.body.location_id
    });
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a traveller and any trips associated with them 
router.delete('/:id', async (req, res) => {
  try {
    const travellerData = await Traveler.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;