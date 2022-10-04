
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'neptuno'
});

connection.connect();

connection.query('SELECT *FROM productos', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
});

connection.end();