const hbs = require('hbs');

// Creamos una funcion que retorne el año actual
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//Se guarda una función donde tenemos como parametro un texto y Poner
//la primera letra en mayuscula y las demás en minusculas.
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});