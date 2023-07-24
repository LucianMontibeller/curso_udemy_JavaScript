//               01234567 
let umaString = 'o rato roeu a roupa do rei de roma.';

console.log(umaString.concat('em uma lindo dia.'));
console.log(umaString + 'em uma lindo dia.');
console.log(`${umaString} em uma lindo dia.`);



console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));


console.log(umaString.match(/[a-z]/));
console.log(umaString.match(/[a-z]/g));


console.log(umaString.search(/x/));
console.log(umaString.replace('um', 'Um'));

console.log(umaString.replace(/t/g, 'g'));

console.log(umaString.length);
console.log(umaString.slice(0, 7));

console.log(umaString.slice(-6, -1));

console.log(umaString.split(' '));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

