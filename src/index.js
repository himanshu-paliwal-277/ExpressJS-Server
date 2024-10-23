import express from 'express';

const port = 3000;

const server = express();

server.get('/', (req, res) => {
    return res.send('Home');
})

server.get('/test', (req, res) => {
    return res.json({message: 'Hello test'});
})

server.get('/hello', (req, res) => {
    return res.json({message: 'Hello world'});
})

server.post("/hello", (req, res) => {
    return res.json({message: 'Hello world Post request'});
})

server.put("/hello", (req, res) => {
    return res.json({message: 'Hello world Put request'});
})

server.delete("/hello", (req, res) => {
    return res.json({message: 'Hello world Delete request'});
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
