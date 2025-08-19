// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import the existing routes
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
// Import the new contact route
const contactRoutes = require('./routes/contactRoutes');

// Use the existing routes
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
// Use the new contact route
app.use('/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});