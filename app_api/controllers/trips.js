const mongoose = require('mongoose');
require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
  try {
    const q = await Model
      .find({})
      .exec();

    if (!q) {
      return res
        .status(404)
        .json({ message: 'No trips found' });
    } else {
      return res
        .status(200)
        .json(q);
    }
  } catch (err) {
    return res
      .status(500)
      .json(err);
  }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model
      .find({ code: req.params.tripCode })
      .exec();

    if (!q) {
      return res
        .status(404)
        .json({ message: 'Trip not found' });
    } else {
      return res
        .status(200)
        .json(q);
    }
  } catch (err) {
    return res
      .status(500)
      .json(err);
  }
};

// POST: /trips - Adds a new trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = new Model({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    const q = await newTrip.save();

    if (!q) {
      return res
        .status(400)
        .json({ message: 'Unable to add trip' });
    } else {
      return res
        .status(201)
        .json(q);
    }
  } catch (err) {
    return res
      .status(400)
      .json(err);
  }
};

// PUT: /trips/:tripCode - Updates a trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  try {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
      .findOneAndUpdate(
        { code: req.params.tripCode },
        {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        },
        { new: true }
      )
      .exec();

    if (!q) {
      return res
        .status(400)
        .json({ message: 'Unable to update trip' });
    } else {
      return res
        .status(201)
        .json(q);
    }
  } catch (err) {
    return res
      .status(400)
      .json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};