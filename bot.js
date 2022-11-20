const { authenticate } = require('./config.js');
const twitterClient = authenticate();

twitterClient.stream('statuses/filter', { track: 'diversity hire' }, function (stream) {
    console.log("Finding incels...");

    // when a tweet is found
    stream.on('data', function (tweet) {
        console.log("Shocking, it looks like we found one: ", tweet.text);

        statusObj = {
            status: "You know @" + tweet.user.screen_name + ", I'm sorry a woman or BIPOC person got hired over you, you should try being less shitty at your job.",
            in_reply_to_status_id: tweet.id_str,
        }
        
        client.post('statuses/update', statusObj, (error, replyTweet, response) => {
            // Handle the error
            if (error) {
                console.log(error);
            }
            //Confirmation of the reply we sent
            console.log("Reply sent: " + replyTweet.text);
        });

        stream.on('error', function (error) {
            console.log(error);
        });
    });
});