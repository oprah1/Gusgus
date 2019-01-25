const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  port: 3306,
  socketPath : '/tmp/mysql.sock',
  host: 'localhost',
  user: 'web',
  database: 'OrderGustave',
  password:'web'

});
connection.connect(err => {
    if (err) throw err
    console.log("connecté")
})


module.exports = connection 