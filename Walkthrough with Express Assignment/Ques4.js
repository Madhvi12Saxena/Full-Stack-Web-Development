const express = require('express');
const app = express();
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ random: randomNumber });
  });
  const port = 5555;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
    