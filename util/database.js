const mysql  = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database:'node-complete',
    password:'Yatin31@root'
});

module.exports = pool.promise();