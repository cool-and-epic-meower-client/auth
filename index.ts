#!/usr/bin/node

import dotenv from 'dotenv';
import { stringify } from 'querystring';
import { json } from 'stream/consumers';
dotenv.config();


const express = require('express')
var randomstring = require("randomstring");
var moment = require('moment');
const app = express()
const port = 80

const serverStartTime = moment().unix();
const skipdbcheck: number = 1;

// Get DB info from env
// Save the DB_URL if it has been given in env
if (typeof process.env.DB_URL != "undefined") {
    var dbUrl = process.env.DB_URL;
} else {
    console.log("Error (29): DB_URL not provided");
    if (skipdbcheck != 1) {
        process.exit(29);
    }
}

// Save the DB_USER if it has been given in env
if (typeof process.env.DB_USER != "undefined") {
    var dbUser = process.env.DB_USER;
} else {
    console.log("Error (29): DB_USER not provided");
    if (skipdbcheck != 1) {
        process.exit(29);
    }
}

// Save the DB_PASSWORD if it has been given in env
if (typeof process.env.DB_PASSWORD != "undefined") {
    var dbPassword = process.env.DB_PASSWORD;
} else {
    console.log("Error (29): DB_PASSWORD not provided");
    if (skipdbcheck != 1) {
        process.exit(29);
    }
}

// Functions

// Check if the format of a key is valid, this does NOT check if the key is valid, only if it could be a valid api key.
function checkKey(apiKey: string): boolean {
    if (apiKey.search(/301a-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/g) == 0) {
        return true;
    } else {
        return false;
    }
}

// Returns a 6 digit auth code
function createAuthCode(): string {
    var authcode: string = ""
    for (let i = 0; i < 6; i++) {
        // Create a random number from 0 to 9
        var authDigit = Math.floor(Math.random() * 10);
        // Append auth digit to auth code
        authcode += authDigit;
    }
    return authcode;
}
// Returns a 8 char auth token 
function createAuthToken(): string {
    var authtoken: string = randomstring.generate(8);
    return authtoken;
}

app.get('/api/v1/serverstatus', (req: any, res:any ) => {
    let requestResponse = JSON.stringify(
        {
            "status": "online",
            "uptime": moment().unix() - serverStartTime
        }
    );
    res.send(JSON.parse(requestResponse));
    console.log(req);
})

app.post('/api/v1/authuser', (req: any, res: any ) => {
    console.log(req.query)
    let authToken: string = createAuthToken();
    let requestResponse = JSON.stringify(
        {
            "result": 200,
            "user": req.query.user,
            "platform": req.query.platform,
            "authtoken": authToken
        }
    );
    res.send(JSON.parse(requestResponse));

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})