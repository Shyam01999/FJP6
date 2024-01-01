const registerQuery = `INSERT INTO "user" (username, email, password, contactnumber) VALUES($1, $2, $3, $4::VARCHAR)`;
const getQuery = `SELECT * FROM "user"`;

module.exports = {
    registerQuery,
    getQuery
}