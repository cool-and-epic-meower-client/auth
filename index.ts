#!/usr/bin/node

<<<<<<< Updated upstream
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
=======
import { BlobOptions } from 'buffer';
import { request } from 'http';
import { json } from 'stream/consumers';

const express = require('express')
const meower = require('./app/meower')
const db = require('./app/db');
var randomstring = require("randomstring");
var moment = require('moment');
const app = express()
const port = 80
const serverStartTime = moment().unix();

var serverSpeed = "normal";
var dbNodeUp = false;

db.init();
>>>>>>> Stashed changes

// Functions

// Auth

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

// Check if the format of a key is valid, this does NOT check if the key is valid, only if it could be a valid api key.
function checkKey(apiKey: string): boolean {
    if (apiKey.search(/301a-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/g) == 0) {
        return true;
    } else {
        return false;
    }
}

<<<<<<< Updated upstream
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

console.log(createAuthCode());
=======
/* ----Accounts---- */

// Checks if an account exists for a username
function checkAccount(platform: string, username: string): number {
    if (platform == "meower") {
        // Write code to check with the bot if a username exists
        if (meower.checkAccount(username)) {
            // 200: Username exists
            return 200;
        } else {
            // 180: Username not found
            return 180;
        }
    } else {
        // 190: Invalid platform
        return 190;
    }
}


/* ----Endpoints---- */

// Testing endpoint
app.get('/v1/test', (req: any, res: any) => {
    let requestResponse = JSON.stringify({
        "status": 'ok',
        "result": {
            "message": "Trans Rights"
        }
    })
    res.send(JSON.parse(requestResponse));
})

// Server status endpoint
// TODO: Add downtime code
app.get('/v1/status', (req: any, res: any) => {
    let requestResponse = JSON.stringify(

        {
            "status": "online",
            "result": {
                "startTime": serverStartTime,
                "serverSpeed": serverSpeed,
                "dbNodeUp": dbNodeUp
            }
        }
    );
    res.send(JSON.parse(requestResponse));
})

// Create a new token
// TODO: Connect to the db
app.get('/v1/auth/newtoken', (req: any, res: any) => {
    var expiry: number;
    if (typeof (req.query.expire) != "undefined") {
        expiry = Number(req.query.expire);
    } else {
        expiry = Date.now() + 200000
    }

    var token = createAuthToken();


    let requestResponse = JSON.stringify(

        {
            "status": "ok",
            "result": {
                "token": token,
                "timestamp": Date.now(),
                "expire": expiry
            }
        }
    );
    res.send(JSON.parse(requestResponse));
})

app.delete('/v1/auth/deleteToken', (req: any, res: any) => {
    if (typeof (req.query.token) != "undefined") {
        if (db.checkToken(req.query.token)) {
            db.removeToken(req.query.token)
            let requestResponse = JSON.stringify(
                {
                    "status": "ok",
                    "result": {}
                }
            )

            res.send(JSON.parse(requestResponse))
        } else {
            let requestResponse = JSON.stringify(
                {
                    "status": "Token Not Found",
                    "result": {}
                }
            )
            res.send(JSON.parse(requestResponse), 404)
        }
    } else {
        let requestResponse = JSON.stringify(
            {
                "status": "Bad Request",
                "result": {}
            }
        )
        res.send(JSON.parse(requestResponse), 400)
    }
}
)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
>>>>>>> Stashed changes
