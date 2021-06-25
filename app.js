const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server running');
});

app.get('/', (req, res) => {
  console.log('Home is accessible');
  res.status(200).send('Welcome to the home page');
});
