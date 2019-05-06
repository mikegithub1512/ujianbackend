const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'root',
    password: 'mysql1234',
    host: 'localhost',
    database: 'ujianbackend',
    port: '3306'
})

module.exports = conn