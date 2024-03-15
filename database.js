const mysql = require('mysql');

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'formData'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Insert data into database
function insertData(name, email, age, dob) {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (name, email, age, dateofbirth) VALUES (?, ?, ?, ?)', [name, email, age, dob], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Retrieve data from database
function getData() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { insertData, getData };
