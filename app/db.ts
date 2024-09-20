const skipdbcheck: number = 1;

import dotenv from 'dotenv';

export function init(): void {
    dotenv.config();

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
}


/* ----Auth Module---- */

// Check if a token exists
// TODO: Code function
export function checkToken(token: string): boolean {
    return true
}

// Remove a token from the db
export function removeToken(token: string): void {
    // TODO: Code function
}

export function addToken(token: string): void {
    // TODO: Code function
}

export function authToken(token: string, uuid: string): void {
    // TODO: Code function
}

export function createUser(uuid: string): void {
    // TODO: Code function
}

export function deleteUser(uuid: string): void {
    // TODO: Code function
}

export function getTokenInfo(token: string): {} {
    return {};
}

export function getUUIDInfo(uuid: string): {} {
    return {};
}
/* --- Mower Account Management --- */

export function disconnectAccount(uuid: string, user: string): void {
    // TODO: Code Function
}

export function linkAccount(uuid: string, user: string): void {
    // TODO: Code Function
}

export function checkACCLinkPrivacy(uuid: string): boolean {
    // TODO: Code Function
    return false;
}

export function setACCLinkPrivacy(uuid: string, value: boolean): void {
    // TODO: Code Function
}

/* ---Sync--- */

export function getValue(domain: string, key: string, uuid: string): string {
    return ""
}

export function setValue(domain: string, key: string, newValue: string, uuid: string): void {

}

export function delValue(domain: string, key:string, uuid: string): void {

}
