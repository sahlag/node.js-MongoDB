// Récupération de la classe de base de evenement.
const EventEmetter = require('events').EventEmitter;

// Initialisation des variable

let scoreA = 0;
let scoreB = 0;
let match = new EventEmetter();// on Initialise le match pour gérer les evenements

// fonction de traitement d'un panier
function addScore(equipe, nbPoints){
    setTimeout(() =>{
        if(equipe === 'A'){
            scoreA += nbPoints;
        } else if(equipe === 'B' ) {
            scoreB += nbPoints
        } 
      
        console.log('Score :équipe A :' +scoreA+ ',équipe B:'+scoreB );
        }, 100);  
}
function sifflet(equipe, nbPoints){
    console.log("-----TTTuuuuuuuuuuTTTT-------")
    console.log("L'equipe"+" " +equipe+" "+"a marqué"+" "+nbPoints+" "+"points");

}

function stopMatch(){
    console.log('|||| FIN DU MATCH ||||');
    // on supprime les traitement liés à l'évenement"panier"
    match.removeListener('panier', addScore, sifflet );
    // Equivalent
    match.removeAllListeners('panier');
}

// Initialisation des evenements(on attache des traitements à mes événements).

match.on('panier', addScore);
match.on('panier', sifflet);
match.on('findeMatch', stopMatch);

/**Début de match **/

//L'équipe A marque un panier de 2 points.
match.emit('panier', 'A', 2);
match.emit('panier', 'B', 3);
match.emit('panier', 'B', 2);
match.emit('panier', 'A', 1);


match.emit('findeMatch');
match.emit('panier', 'B', 2);
/**fin de match **/