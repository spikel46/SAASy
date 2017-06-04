"use strict";
exports.__esModule = true;
var googleOAuth2_1 = require("./googleOAuth2");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Creates a Passport configuration for Google
var GooglePassport = (function () {
    function GooglePassport() {
        var _this = this;
        this.clientId = googleOAuth2_1["default"].id;
        this.secretId = googleOAuth2_1["default"].secret;
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: "fix this line",
            profileFields: ['id', 'displayName', 'emails']
        }, function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                console.log('validating facebook profile:' + JSON.stringify(profile));
                _this.userId = profile.id;
                _this.username = profile.username;
                _this.email = profile.emails[0].value;
                return done(null, profile);
            });
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
    return GooglePassport;
}());
exports["default"] = GooglePassport;
