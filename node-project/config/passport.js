const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('../models/Users'); // Replace with your database connection

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'

}, (username, password, done) => {

  // Find the user by username
  console.log('user name',username);
  const user = users.find(u => u.username === username);

  if (!user) {
    console.log('Incorrect username');
    return done(null, false, { message: 'Incorrect username.' });
  }

  if (!user.verifyPassword(password)) { // Replace with password hashing logic
    return done(null, false, { message: 'Incorrect password.' });
  }

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

module.exports = passport;
