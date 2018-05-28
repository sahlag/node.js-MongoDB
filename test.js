// Appel du fichier “module1.js” dans le programme principal 
const module1 = require('module1');
const http = require('http');


// Création du serveur HTTP
let server = http.createServer((request, response) => {

    response.write('<h1> hello world !</h1>');
    response.write('<p>Creation du serveur http</p>');
    response.end ();

});

server.listen(3001);
