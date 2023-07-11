const http = require('http');

const productsData = {
  men: [
    { id: 1, name: 'Men Product 1' },
    { id: 2, name: 'Men Product 2' },
    // Add more men products here
  ],
  women: [
    { id: 1, name: 'Women Product 1' },
    { id: 2, name: 'Women Product 2' },
    // Add more women products here
  ]
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsData.men));
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsData.women));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
