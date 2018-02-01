const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // express automatically detects Content-Type
    res.send(`
        <html>
            <head><title>Hello</title></head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `);
});

app.get('/user', (req, res) => {
    // express automatically detects Content-Type
    res.send({
        name: 'Bill',
        age: 25
    })
});

// deploying environment may set port number
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('The server started at', port);
});