const express = require('express'); // Enable a library Express to our server.js

const path = require('path');

const app = express(); // This is our server Express - it`s application

const port = 8000; // Port of our server

// When our server starts working, it outputs on console a notice
app.listen(port, () => {
    console.log(`Server started at http://localhost: ${port}`)
})
app.use(express.static(path.join(__dirname, '/public')))

// Server responses by sending to client (localhost:8000) files from directory 'public'
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
   
})

///   node server.js