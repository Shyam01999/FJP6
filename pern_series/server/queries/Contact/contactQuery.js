const getContactFormListQuery = `SELECT * FROM "contact" `;
const contactFormQuery = `INSERT INTO "contact" (username, email, message) VALUES($1, $2, $3)`;

module.exports = {
    getContactFormListQuery,
    contactFormQuery
}