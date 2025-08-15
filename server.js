const express = require('express');
const app = express();
const PORT = 3000;

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});