function criaCalculadora(){
  return {
    // atributos
    display: document.querySelector('.display'),

    // métodos
    inicia(){
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', e =>{
        if(e.keyCode === 13){
          this.realizaConta();
        }
      })
    },
    cliqueBotoes(){
      document.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('btn_num')){
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn_clear')){
          this.btnClear();
        }

        if(el.classList.contains('btn_del')){
          this.apagaUm();
        }

        if(el.classList.contains('btn_eq')){
          this.realizaConta();
        }
        this.display.focus();
      })
    },

    realizaConta(){
      let conta = this.display.value;
      try{
      conta = eval(conta);
      
        if(!conta) {
          alert('conta inválida.')
        }
      this.display.value = conta
      }catch(e){
        alert('conta inválida.');
      }
    },
    apagaUm(){
      this.display.value = this.display.value.slice(0, -1);
    },

    btnClear(){
      this.display.value = '';
    },

    btnParaDisplay(valor){
      this.display.value += valor
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
