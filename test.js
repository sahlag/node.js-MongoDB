// Appel du fichier “module1.js” dans le programme principal 
const calculatrice = require('calculatrice');
// import module
const http = require('http');

const EventEmitter = require('events').EventEmitter
// Création du serveur HTTP
let server = http.createServer((request, response) => {

  
    response.write('<h1> hello world !</h1>');
    response.write('<p>Creation du serveur http</p>');
   
    let resultat = calculatrice.addition(12, 42);
    response.write(`<p>addition "${resultat}" </p>`);
    resultat = calculatrice.multiplication(11, 32);

//Utilisation de la fonction principale
    response.write(`<p>Multiplication "${resultat}" </p>`);
    resultat = calculatrice('addition', 5, 17);
    response.write(`<p>Addition (fonction principale) "${resultat}" </p>`);
    resultat = calculatrice('multiplication', 5, 17);
    response.write(`<p>Multiplication (fonction principale) "${resultat}" </p>`);
    resultat = calculatrice('sahlag', 5, 17);
    response.write(`<p>Test bidon (fonction principale) "${resultat}" </p>`);
    response.end ();
   

});

server.listen(3001);


let match = new EventEmitter();
let points = 0;

// définition de l'évenement
match.on('twopoints',() =>{
  setTimeout(() =>{
  points+= 2;
  console.log('Nouveau 2points, score :' +points+ '(dans la callback' );
  }, 100);
});


// Emission de l'venement

/*** DEBUT DU MATCH ***/


/** NOUVEAU PANIER ***/
console.log(`1 Score avant l'evenement: ${points}`);
match.emit('twopoints');
console.log(`1 Score aprés l'evenement: ${points}`);

console.log(`2 Score avant l'evenement: ${points}`);
match.emit('twopoints');
console.log(`2 Score aprés l'evenement: ${points}`);
