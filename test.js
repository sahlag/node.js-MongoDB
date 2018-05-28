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
let pointsA = 0;
let pointsB = 0;

// définition de l'évenement
match.on('panier',(equipe, nbPoints) =>{
  setTimeout(() =>{
  if(equipe === 'equipe1'){
      pointsA += nbPoints;
  } else if(equipe === 'equipe2' ) {
      pointsB +=nbPoints
  } 

  console.log('Score :equpe1 :' +pointsA+ ',equipe2:'+pointsB );
  }, 100);

});


// Emission de l'venement

/*** DEBUT DU MATCH ***/


/** NOUVEAU PANIER ***/

match.emit('panier', 'equipe1',2);
match.emit('panier', 'equipe2',3);
match.emit('panier', 'equipe1',3);
match.emit('panier', 'equipe2',2);

/*nouveau panier*/


