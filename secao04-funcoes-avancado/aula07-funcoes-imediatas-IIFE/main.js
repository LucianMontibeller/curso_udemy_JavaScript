(function() {
  const sobrenome ='montibeller';
  function crieNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome(){
    console.log(crieNome('Lucian'));
  }
  
  falaNome();
})();

