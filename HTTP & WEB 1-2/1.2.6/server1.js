const express = require('express'); // Enable a library Express to our server.js

const fs = require("fs"); // Enable a module "fs" for working with file system

const app = express(); // This is our server Express - it`s function

const port = 8000; // Port of our server

// When our server starts working, it outputs on console a notice
app.listen(port, () => {
    console.log(`Our server started and is listening the port ${port}`)
})

// Server responses by sending to client (localhost:8000) a count of visiting of site.
// Count of visiting is written in the file 'counter.txt', firstly it equals to zero. 
app.get('/', (req, res) => {

    // If a file exists, a count is reading from file, showing on the screen, incrementing, rewriting to the file.
    if (fs.existsSync('counter.txt')) {
        let count = +fs.readFileSync('counter.txt', 'utf-8') // reading and transmuting to the number

        res.send(`Count of visits  ${count}`) // showing on the browser
        count++ // incrementing
        count + // transmuting to string format
            fs.writeFileSync('counter.txt', `${count}`, 'utf8'); // rewriting to the file
    } else {

        res.send(`Not found of counter -(`) // translating on the browser this notice
    }
})
