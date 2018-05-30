const stream = require('stream');

const streamRead = new stream.Readable();
streamRead._read =() =>{
    console.log('Lecture ne nouvelle donnée');
}
// methode automatique de lecture 
streamRead.on('data',(buffer) =>{
   console.log(buffer);
   console.log(buffer.toString());
})

// methode manuele
streamRead.push('Ma premiere donnée');
const monBuffer = streamRead.read();
console.log(monBuffer.toString());
