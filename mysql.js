const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'filmes_tab'
});

exports.pool = pool;