const express = require('express');
const app = express();

app.use(express.static(_dirname));

app.get('/hola', (req, res) => {
    res.send('ruta Hola'); 
 });

app.get('/adios', (req, res) => {
    res.send('ruta Adiós'); 
 });

app.listen(3000, () => {
    console.log('Example listening in 3000')
});