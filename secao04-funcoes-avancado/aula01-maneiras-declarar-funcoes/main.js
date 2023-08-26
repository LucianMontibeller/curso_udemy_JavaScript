// Declaração de função 
//

function  falaOi() {
  console.log('Oie');
  
}
// First-class objects (Objetos de primeira classe)
// Function expression
//
const nome = function () {
  console.log('Lucian')
};
falaOi();
nome();

// Arrow function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto

const obj = {
  falar: function() {
    console.log('Estou falando...')
  }
};
obj.falar();
