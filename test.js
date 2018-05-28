// Appel du fichier “module1.js” dans le programme principal 
const module1 = require('module1');
const http = require('http')

// test
console.log('bonjour');
const monTableau = [1, 2, 3, 4, 5];
monTableau.forEach(elem => console.log(elem));

// Chargement module dans node_modules
console.log(module1);

// Module http de Node
console.log(http);

console.log('fin de l\'execution');