const emailExistQuery = `SELECT * FROM "user" WHERE email = $1`;
const contactnumberExistQuery = `SELECT * FROM "user" WHERE contactnumber = $1`;
const registerQuery = `INSERT INTO "user" (username, email, password, contactnumber, role) VALUES($1, $2, $3, $4, $5)`;
const getQuery = `SELECT * FROM "user"`;

// ****************************
//        Login Query
// ****************************

const currentPassword = `SELECT password FROM "user" WHERE email = $1`;

module.exports = {
    emailExistQuery,
    contactnumberExistQuery,
    registerQuery,
    getQuery,
    currentPassword
}