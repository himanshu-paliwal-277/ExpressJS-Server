// Import the 'express' module to use its functionalities for creating and managing a web server.
import express from 'express';

const port = 3000; // Define a port number (3000) for the server to listen on.

const server = express(); 
// Create an instance of an Express application by calling the express() function.
// This 'server' object contains various methods and properties for handling HTTP requests and configuring server behavior.

// Set up a GET request handler for the root ('/') route.
server.get('/', (req, res) => {
    // When a GET request is received on '/', send a simple response with text "Home".
    return res.send('Home');
});

// Define a GET request handler for the '/test' route.
server.get('/test', (req, res) => {
    // When a GET request is received on '/test', respond with a JSON object containing a message.
    return res.json({message: 'Hello test'});
});

// Define a GET request handler for the '/hello' route.
server.get('/hello', (req, res) => {
    // When a GET request is received on '/hello', respond with a JSON object containing a message.
    return res.json({message: 'Hello world'});
});

// Define a POST request handler for the '/hello' route.
server.post("/hello", (req, res) => {
    // When a POST request is received on '/hello', respond with a JSON object containing a different message.
    return res.json({message: 'Hello world Post request'});
});

// Define a PUT request handler for the '/hello' route.
server.put("/hello", (req, res) => {
    // When a PUT request is received on '/hello', respond with a JSON object containing a message for PUT requests.
    return res.json({message: 'Hello world Put request'});
});

// Define a DELETE request handler for the '/hello' route.
server.delete("/hello", (req, res) => {
    // When a DELETE request is received on '/hello', respond with a JSON object containing a message for DELETE requests.
    return res.json({message: 'Hello world Delete request'});
});

// Start the server to listen on the specified port (3000).
server.listen(port, () => {
    // This callback function runs once the server is successfully listening on the specified port.
    console.log(`Server is running on port ${port}`);
});
