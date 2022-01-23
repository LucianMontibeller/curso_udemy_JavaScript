function meuEscopo(){
	const form = document.querySelector('.form');
	const result = document.querySelector('.resultado')	
//	form.onsubmit = function (evento) {
//		evento.preventDefault();
//		alert(1);
//		console.log('Foi enviado.')
//	};
//	let contador = 1;
//	function recebeEventoForm(evento){
//		evento.preventDefault();
//		console.log(`form não enviado ${contador}`);
//		contador++;
//	}

	const pessoas = []

	function recebeEventoForm(evento){
		evento.preventDefault(evento)
		const nome = form.querySelector('.nome');
		const sobrenome = form.querySelector('.sobrenome');
		const peso = form.querySelector('.peso');
		const altura = form.querySelector('.altura');
	
		pessoas.push({
			nome: nome.value,
			sobrenome: sobrenome.value,
			peso: peso.value,
			altura: altura.value
		});

		console.log(pessoas);

		result.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
			`${peso.value} ${altura.value}</p>`;
	}
	form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
