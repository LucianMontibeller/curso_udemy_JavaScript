//IEEE 754-2008
let num1 = 0.7; // number
let num2 = 2.5; // number

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

num1 = ((num1 * 100) + (num2 * 100) / 100)
console.log(num1)
//num1 = Number(num1.toFixed(2))

// console.log(num1.toString() + num2);
//num1 = num1.toString();
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger((num1)));
let temp = num1 + '5';
console.log(temp);
