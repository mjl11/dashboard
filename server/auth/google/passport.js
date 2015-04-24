var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function(User, Staff, config) {
    passport.use(new GoogleStrategy({
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,
            callbackURL: config.google.callbackURL
        },
        function(accessToken, refreshToken, profile, done) {
            // If account is not an Intrinsic account, get out of here!
            if (profile._json.domain != "intrinsicschools.org") {
                done();
            } else {
                // Checks to see if user is already in DB
                User.findOne({
                    'google.id': profile.id
                }, function(err, user) {
                    // If not, create user
                    if (!user) {

                        // Checks to see if user is in the users.staff collection
                        Staff.findOne({
                            'email': profile.emails[0].value
                        }, function(err, staff) {
                            // If not, set user as a student
                            if (!staff) {
                                user = new User({
                                    name: profile.displayName,
                                    email: profile.emails[0].value,
                                    role: 'student',
                                    username: profile.username,
                                    provider: 'google',
                                    google: profile._json
                                });

                                user.save(function(err) {
                                    if (err) done(err);
                                    return done(err, user);
                                });
                            } // If so, sets user as a staff member 
                            else {
                                user = new User({
                                    name: profile.displayName,
                                    email: profile.emails[0].value,
                                    role: 'staff',
                                    username: profile.username,
                                    provider: 'google',
                                    google: profile._json
                                });

                                user.save(function(err) {
                                    if (err) done(err);
                                    return done(err, user);
                                });
                            }
                        });

                    } // User exists already, send object
                    else {
                        return done(err, user);
                    }
                });
            }
        }));
};