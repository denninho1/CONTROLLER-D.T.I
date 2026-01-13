const mysql = require("mysql2");

const db = mysql.createPool ({
    host: 'localhost',
    user: 'controller_user',
    password: 'C0ntroll3rL@s3R',
    database: 'controller_dti',
})

module.exports = db;