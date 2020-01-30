const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');
// Se llama al puerto 3000
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine buscando el directorio en hbs.
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Mandamos por medio de un get la variable con un nombre de requerir y responder
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Carla Guamanzara"
    });
});

app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about');
});
//Escucha el puerto
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});