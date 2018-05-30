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

// ecriture dans un fichier.

fs.writeFile('./public/log.txt', '[30/05/2018 10:54]: mise a jour du fichier "log.txt"',{
 encodage : 'utf-8', flag : 'w'
},
  (err)=>{
      if(err){
          console.log(err);
      } else{
          console.log('Ecriture ok !')
      }
  }
);