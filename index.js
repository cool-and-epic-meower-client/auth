#!/usr/bin/node

// Get db info from env
// Save the dbUrl if it has been given in env
if (typeof process.env.dbUrl != "undefined") {
    dbUrl = process.env.dbUrl;
} else {
    console.log("Error (29): dbUrl not provided");
    process.exit(29);
}

// Save the dbUser if it has been given in env
if (typeof process.env.dbUser != "undefined") {
    dbUser = process.env.dbUser;
} else {
    console.log("Error (29): dbUser not provided");
    process.exit(29);
}

// Save the dbPassword if it has been given in env
if (typeof process.env.dbPassword != "undefined") {
    dbPassword = process.env.dbPassword;
} else {
    console.log("Error (29): dbPassword not provided");
    process.exit(29);
}

console.log("Test line");
