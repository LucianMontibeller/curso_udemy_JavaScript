function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function(assunto) {
      return `${this.nome} está ${assunto}`;
    }
  };
}

const p1 = criaPessoa('Lucian', 'Montibeller');
const p2 = criaPessoa('Debora', 'Montibeller');
console.log(p1.fala('oi'));
console.log(p2.fala('oi'));
