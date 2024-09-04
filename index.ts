#!/usr/bin/node

import dotenv from 'dotenv';
dotenv.config();

// Get DB info from env
// Save the DB_URL if it has been given in env
if (typeof process.env.DB_URL == "string") {
    var dbUrl: string = process.env.DB_URL as string;
} else {
    console.log("Error (29): dbUrl not provided");
    process.exit(29);
}

// Save the DB_USER if it has been given in env
if (typeof process.env.DB_USER == "string") {
    var dbUser: string = process.env.DB_USER as string;
} else {
    console.log("Error (29): DB_USER not provided");
    process.exit(29);
}

// Save the DB_PASSWORD if it has been given in env
if (typeof process.env.dbPassword == "string") {
    var dbPassword: string = process.env.DB_PASSWORD as string;
} else {
    console.log("Error (29): DB_PASSWORD not provided");
    process.exit(29);
}

console.log("Test line");
