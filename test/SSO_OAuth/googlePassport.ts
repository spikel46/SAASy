import googleOAuth2 from './googleOAuth2';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Creates a Passport configuration for Google
class GooglePassport {

    userId: string;
    username: string;
    email: string;
    clientId: string;
    secretId: string;
    
    constructor() {
        this.clientId = googleOAuth2.id;
        this.secretId = googleOAuth2.secret;

        passport.use(new GoogleStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "fix this line",
                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                process.nextTick( () => {
                    console.log('validating facebook profile:' + JSON.stringify(profile));
                    this.userId = profile.id;
                    this.username = profile.username;
                    this.email = profile.emails[0].value;
                    return done(null, profile);
                });
            }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user);
        });

        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
}
export default GooglePassport;
