const express = require('express');
const app = express();
const port = 3000;

const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');

// This will now correctly route requests to the /about path
app.use('/about', aboutRoutes);

// Keep this for the home page
app.use('/', homeRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});