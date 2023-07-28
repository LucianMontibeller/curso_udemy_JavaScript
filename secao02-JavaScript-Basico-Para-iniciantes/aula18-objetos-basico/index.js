/*const pessoa1 = {
  nome: 'Lucian',
  sobrenome: 'Miranda',
  idade: 25
};
const pessoa2 = {
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 55
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const pessoa1 = criaPessoa('Lucian', 'montibeller', 34);
console.log(pessoa1.nome, pessoa1.sobrenome);
*/

const pessoa1 = {
  nome: 'Lucian',
  sobrenome: 'Montibeller',
  idade: 34,

  fala() {
    console.log(`Minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
