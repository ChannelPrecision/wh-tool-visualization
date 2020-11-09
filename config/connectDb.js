
const config = require('config');
const mysql = require('mysql');

const connection = {
    host: config.get('dbhost'),
    user: 'israel_olaguer',
    password: config.get('dbpassword'),
    database: 'data_tools',
    multipleStatements: true
};

const connectDB = mysql.createConnection(connection);

connectDB.connect(function (err) {
    err ? console.log(err) : console.log(`MySQL connected.`);
})

module.exports = connectDB;