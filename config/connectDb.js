// const config = require('config');
const mysql = require('mysql');
const ck = require('ckey');

const connection = {
    host: ck.dbhost,
    user: ck.dbuser,
    password: ck.dbpassword,
    database: 'efficiency_report',
    multipleStatements: true
};

const connectDB = mysql.createConnection(connection);

connectDB.connect(function (err) {
    err ? console.log(err) : console.log(`MySQL connected.`);
})

module.exports = connectDB;