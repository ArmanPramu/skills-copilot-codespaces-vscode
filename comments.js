// Create web server with Express.js
// Import express module
const express = require('express');
const app = express();
// Import body-parser module
const bodyParser = require('body-parser');
// Import comments module
const comments = require('./comments.js');
// Set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Set up port
const port = 3000;
// Set up the route
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).json(req.body);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});