const express = require('express');
var mysql = require('mysql');

const app = express();

app.listen(3001);

console.log("shit's running");

app.get('/', (req, res) => {
  res.send("Hello world");
})

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });


