import facebookAppAuth from './facebookOAuth2';

let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;

// Creates a Passport configuration for Google
class FacebookPassport {

    userId: string;
    username: string;
    email: string;
    clientId: string;
    secretId: string;
    
    constructor() {
        this.clientId = facebookAppAuth.id;
        this.secretId = facebookAppAuth.secret;

        passport.use(new FacebookStrategy({
                clientID: this.clientId,
                clientSecret: this.secretId,
                callbackURL: "http://quorumquery.azurewebsites.net/auth/facebook/callback",
                profileFields: ['id', 'displayName', 'emails']
            },
            (accessToken, refreshToken, profile, done) => {
                process.nextTick( () => {
                    console.log('validating facebook profile:' + JSON.stringify(profile));
                    this.userId = profile.id;
                    this.username = profile.displayName;
                    this.email = profile.emails[0].value;
                    return done(null, profile);
                });
            }
        ));

        passport.serializeUser((user, done) => {
            done(null, user);
        });

        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }
}
export default FacebookPassport;
