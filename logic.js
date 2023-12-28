const express = require('express');
const path = require('path');
const app = express();

// Set up a static directory to serve static files like CSS and JS
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  // Sending the HTML file when a GET request is made to the root URL
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
