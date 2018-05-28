// Appel du fichier “module1.js” dans le programme principal 
const calculatrice = require('calculatrice');
// import module
const http = require('http');


// Création du serveur HTTP
let server = http.createServer((request, response) => {

    response.write('<h1> hello world !</h1>');
    response.write('<p>Creation du serveur http</p>');
   

    const resultat = calculatrice.addition(12, 42);
    response.write(`<p>mon resultat "${resultat}" </p>`);
    response.end ();
   

});

server.listen(3001);
