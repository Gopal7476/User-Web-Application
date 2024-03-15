const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, age, dob } = req.body;
  
  // Simple client-side validation
  if (!name || !email || !age || !dob) {
    return res.status(400).send('All fields are required');
  }

  if (!isValidEmail(email)) {
    return res.status(400).send('Invalid email format');
  }

  if (!isValidAge(age)) {
    return res.status(400).send('Age must be a positive integer');
  }

  // Store data in database
  try {
    await db.insertData(name, email, age, dob);
    res.redirect('/');
  } catch (err) {
    console.error('Error storing data:', err);
    res.status(500).send('Internal server error');
  }
});

// Retrieve data from database
app.get('/data', async (req, res) => {
  try {
    const data = await db.getData();
    res.json(data);
  } catch (err) {
    console.error('Error retrieving data:', err);
    res.status(500).send('Internal server error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Email validation function
function isValidEmail(email) {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Age validation function
function isValidAge(age) {
  return Number.isInteger(Number(age)) && parseInt(age) > 0;
}
