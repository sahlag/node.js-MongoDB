
let buffer1 = new Buffer(15);
console.log(buffer1);

const hello = 'abcde'
let buffer2 = new Buffer(hello);
console.log(buffer2);
console.log(buffer2.length);// taille de buffer
console.log(buffer2.toString());// transformer un buffer en string.

const chaine = "012345abcde";
const buffer = new Buffer(chaine);
buffer[10] = buffer[0]
console.log(buffer);
console.log(buffer.toString());