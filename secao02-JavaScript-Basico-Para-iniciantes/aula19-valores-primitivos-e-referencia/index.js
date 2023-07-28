/*
 * primitivos (imutaveis) -strings, number, booblean, undefined,
 * null (bihint, symbol) - valor
 *
 * Referência (mutável) - array

let a = 'A';
let b = a; // Cópia
console.log(a, b);
*/

const a = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);

