const fs = require('fs');

// Lecture du fichier "file.js" qui se trouve dans le dossier public.

fs.readFile('./public/log.txt', {
 encoding : 'utf-8', flag: 'r'
},
    (err, data) =>{
        if(err){
            console.log(err);
        } else {
            console.log(data);
        }
    }
);