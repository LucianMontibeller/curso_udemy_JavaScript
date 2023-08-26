// Global
function retornaFuncao() {
  const nome = 'Lucian';
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao();
