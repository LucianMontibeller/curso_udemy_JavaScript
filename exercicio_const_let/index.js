/* 
Lucian tem 32 anos , peso 80 kg
tem 1.77 de altura  e seu imc  é de 25.95
Lucian nasceu em 1989.
*/

const nome = 'Lucian';
const idade = 33;
const peso = 80;
const altura = 1.77;
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu imc é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)

