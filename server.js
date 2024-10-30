const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(middlewares);
server.use(router);


const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define the HTTP methods you want to allow
    allowedHeaders: ['Content-Type', 'Authorization'], // Define the allowed headers
  };
  
  server.use(cors(corsOptions));
  

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
