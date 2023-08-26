// function funcao(a, b ,c) {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total, a, b ,c);
// }

// funcao(3, 4, 5);


function funcao (a, b = 2) {
  console.log(a + b);
}
funcao(2);

function funcao1 ({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
funcao1({nome: 'Lucian', sobrenome: 'montibeller', idade: 34});

function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if(operador === '-') acumulador -= numero;
    if(operador === '/') acumulador /= numero;
    if(operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 0, 20, 30, 40, 50);
conta('*', 0, 20, 30, 40, 50);
