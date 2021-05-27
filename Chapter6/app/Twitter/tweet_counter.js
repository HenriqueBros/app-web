var ntwitter = require('ntwitter'),
    credentials = require('./credentials.json'),
    twitter,
    counts = {};

// set up our twitter objects
twitter = ntwitter(credentials);

// initialize our counters
counts.bolsonaro = 0;
counts.cpi = 0;

twitter.stream(
    'statuses/filter',
    { track: ["Bolsonaro", "CPI"] },
    function(stream) {
        stream.on('data', function(tweet) {
            if (tweet.text.indexOf("Bolsonaro") > -1) {
                // increment the awesome counter
                counts.bolsonaro = counts.bolsonaro + 1;
            }
        });
        stream.on('data', function(tweet) {
            if (tweet.text.indexOf("CPI") > -1) {
                // increment the awesome counter
                counts.cpi = counts.cpi + 1;
            }
        });
    }
);

setInterval(function () {
    console.log("Bolsonaro: " + counts.bolsonaro);
    console.log("CPI: " + counts.cpi);
}, 3000);

module.exports = counts;
