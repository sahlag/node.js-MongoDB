const http = require('http');

// Création du serveur.
let server = http.createServer((request, response) =>{
    const path = request.url;
    switch(path){
        case '/':
                response.write('<h1>Bienvenue sur la page d\'accueil</h1>');
            break;
        case '/admin':
                response.write('<h1><meta charset="utf-8">zone Sécurisée</h1>');            
            break;
        default:
                response.write('<h1>Error 404: Page NOT FOUND</h1>');
    }

    response.write('<h1>Hello</h1>');
    response.end();

});

// mise en écoute sur le port 3000
server.listen(3000, () => {
    console.log("serveur en écoute sur http://localhost:3000");
});

