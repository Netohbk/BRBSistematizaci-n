const express = require('express');
const app = express();

app.use(express.static(_dirname));

app.get('/hola', (req, res) => {
    res.send('ruta Hola'); 
});

app.get('/adios', (req, res) => {
    res.send('ruta Adiós'); 
});

 
app.get('/er', (req, res) => {
    res.send('ruta er'); 
});

app.get('/ty', (req, res) => {
    res.send('ruta ty'); 
});

