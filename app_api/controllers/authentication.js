const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user');

const register = async (req, res) => {
  // Validate message to ensure that all parameters are present.
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'All fields required' });
  }

  // Create a new user object using the submitted name and email.
  // The password is not stored directly.
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: ''
  });

  // Use the setPassword method from the user model.
  // This creates the salt and hash values for the password.
  user.setPassword(req.body.password);

  try {
    const q = await user.save();

    if (!q) {
      return res
        .status(400)
        .json({ message: 'Unable to register user' });
    }

    // Return a new user token.
    const token = user.generateJWT();

    return res
      .status(200)
      .json({ token });
  } catch (err) {
    return res
      .status(400)
      .json(err);
  }
};

const login = (req, res) => {
  // Validate message to ensure that email and password are present.
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'All fields required' });
  }

  // Delegate authentication to passport module.
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      // Error in authentication process.
      return res
        .status(404)
        .json(err);
    }

    if (user) {
      // Authentication succeeded. Generate JWT and return to caller.
      const token = user.generateJWT();

      return res
        .status(200)
        .json({ token });
    } else {
      // Authentication failed. Return error information.
      return res
        .status(401)
        .json(info);
    }
  })(req, res);
};

// Export methods that drive endpoints.
module.exports = {
  register,
  login
};