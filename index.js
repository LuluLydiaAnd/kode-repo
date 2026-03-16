const http = require('http');
const router = require('./router');

const routes = {
'/info': '<h1>Info Page</h1>',
'/about': '<h1>Learn More About Us</h1>',
'/contact': '<h1>Contact Us</h1>',
};

const port = 3000;
const app = http.createServer(router);

app.listen(port);
console.log(`Server running on port number: ${port}`);
