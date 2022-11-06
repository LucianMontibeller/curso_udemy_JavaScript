/*
Lucian Rafael Montibeller tem 33 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.9243243242
*/
const anoatual = 2022;
const nome = 'Lucian Rafael';
const sobrenome = 'Montibeller';
const idade = 33;
const peso = 84;
const altura = 1.80
let imc = peso / (altura * altura)
let anoNascimento = anoatual - idade;

console.log(nome, sobrenome, 'tem ',idade,'anos, pesa',peso,'kg')
console.log('tem',altura,'de altura e seu IMC é de',imc)

