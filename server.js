const http = require('http');
const url = require('url');
// Création du serveur.
let server = http.createServer((request, response) =>{

// on récupère l'URL de la rqeuet
let path = request.url;
// Objet qui décompose l'url
path = url.parse(path);
//on récupère le "pathname" qui l'on peut tester:
// -il est situé aprés le nom de domaine
// -il est situé avant les paramètre GET

// selon l'URL, on effectue des actions différentes.
path = path.pathname;

    switch(path){
        case '/':
                response.write('<h1>Bienvenue sur la page d\'accueil</h1>');
            break;
        case '/admin':
                response.write('<h1><meta charset="utf-8">zone Sécurisée</h1>');            
            break;
        default:
                response.writeHead(404); // le code de l'url
                response.write('<h1>Error 404: Page NOT FOUND</h1>');
    }

                response.end();

});

// mise en écoute sur le port 3000
server.listen(3000, () => {
    console.log("serveur en écoute sur http://localhost:3000");
});

