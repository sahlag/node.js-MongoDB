// Appel du fichier “module1.js” dans le programme principal 
const calculatrice = require('calculatrice');
// import module
const http = require('http');


// Création du serveur HTTP
let server = http.createServer((request, response) => {

    response.write('<h1> hello world !</h1>');
    response.write('<p>Creation du serveur http</p>');
   

    let resultat = calculatrice.addition(12, 42);
    response.write(`<p>addition "${resultat}" </p>`);

    resultat = calculatrice.multiplication(11, 32);
    response.write(`<p>Multiplication "${resultat}" </p>`);
    //Utilisation de la fonction principale
    resultat = calculatrice('addition', 5, 17);
    response.write(`<p>Addition (fonction principale) "${resultat}" </p>`);
    resultat = calculatrice('multiplication', 5, 17);
    response.write(`<p>Multiplication (fonction principale) "${resultat}" </p>`);

    response.end ();
   

});

server.listen(3001);
