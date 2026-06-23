const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  // console.log('In Middleware');

  const authHeader = req.headers['authorization'];
  // console.log('Auth Header: ' + authHeader);

  if (authHeader == null) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  const headers = authHeader.split(' ');
  if (headers.length < 2) {
    console.log('Not enough tokens in Auth Header: ' + headers.length);
    return res.sendStatus(501);
  }

  const token = headers[1];
  // console.log('Token: ' + token);

  if (token == null) {
    console.log('Null Bearer Token');
    return res.sendStatus(401);
  }

  // console.log(process.env.JWT_SECRET);
  // console.log(jwt.decode(token));

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      console.log('Token Validation Error!');
      return res.sendStatus(401);
    }

    req.auth = verified; // Set the auth param to the decoded object
    next(); // Continue to the protected route
  });
}

// Authentication routes
router
  .route('/login')
  .post(authController.login);

router
  .route('/register')
  .post(authController.register);

// All trips route
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip);

// Single trip route
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip)
  .delete(authenticateJWT, tripsController.tripsDeleteTrip);

module.exports = router;