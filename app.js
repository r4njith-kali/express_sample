const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello from the other side');
});
app.get('/about', (req,res) => {
    res.send('WELCOME TO CONTACT PAGE')
})
app.get('/contact', (req,res) => {
    res.send('Welcome to nigga page')
})

app.listen(port, () => {
    console.log('Server running at port:' + port)
})