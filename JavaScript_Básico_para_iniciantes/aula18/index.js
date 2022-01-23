/*
const pessoa = {
	nome : 'Lucian',
	idade : 33,
	sexo : 'M',
};

console.log(pessoa.nome)

function criaPessoa(nome, idade){
	return{nome,idade};
};

const p = criaPessoa('Lucian', 33);
console.log(p.nome)
*/

const pessoa1 = {
	nome : 'Lucian',

	fala(){
		console.log(`${this.nome} disse olá.`);
	}
};

pessoa1.fala()
