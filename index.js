#!/usr/bin/node

import dotenv from 'dotenv';
dotenv.config();

// Get DB info from env
// Save the DB_URL if it has been given in env
if (typeof process.env.DB_URL != "undefined") {
    var dbUrl = process.env.DB_URL;
} else {
    console.log("Error (29): DB_URL not provided");
    process.exit(29);
}

// Save the DB_USER if it has been given in env
if (typeof process.env.DB_USER != "undefined") {
    var dbUser = process.env.DB_USER;
} else {
    console.log("Error (29): DB_USER not provided");
    process.exit(29);
}

// Save the DB_PASSWORD if it has been given in env
if (typeof process.env.DB_PASSWORD != "undefined") {
    var dbPassword = process.env.DB_PASSWORD;
} else {
    console.log("Error (29): DB_PASSWORD not provided");
    process.exit(29);
}

// Functions

// Check if the format of a key is valid, this does NOT check if the key is valid, only if it could be a valid api key.
function checkKey(apiKey) {
    if (apiKey.search(/301a-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/g) == 0) {
        return true;
    } else {
        return false;
    }
}