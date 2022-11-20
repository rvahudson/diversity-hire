const Twitter = require('twitter');
const Promise = require('bluebird')
const dotenv = require("dotenv")
dotenv.config()

const authenticate = () => {
    let secrets = {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    }
    var twitterClient = new Twitter(secrets);
    return twitterClient;
}

module.exports = { authenticate };