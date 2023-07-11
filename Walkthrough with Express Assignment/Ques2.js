const express = require('express');
const app = express();
let counter = 0;
app.get('/', (req, res) => {
    res.json({ counter });
  });
  
  app.get('/increment', (req, res) => {
    counter++;
    res.json({ counter });
  });
  
  app.get('/decrement', (req, res) => {
    counter--;
    res.json({ counter });
  });
  app.listen(3333, () => {
    console.log('Server is listening on port 3333');
  });
    