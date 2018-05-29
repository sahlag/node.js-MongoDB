const stream = require('stream');

const streamRead = new stream.Readable();
streamRead._read =() =>{
    console.log('Lecture ne nouvelle donnée');
}

streamRead.on('data',(buffer) =>{
   console.log(buffer);
   console.log(buffer.toString());
})


streamRead.push('Ma premiere donnée');

