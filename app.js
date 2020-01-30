const http = require('http');
// Creamos el servidor con los puertos especificos
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Carla',
        edad: 21,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //JSON.stringify es una funcion que escribe dentro de un Json
    //res.write("Hola Mundo, desde nodeJS!");
    res.end();
}).listen(8085);

console.log("Escuchando en el puerto 8085");