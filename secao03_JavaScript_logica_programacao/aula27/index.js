//condicao 	? valor verdadeiro : valor para falso


const pontuacaoUsuario = 1000;
const nivelUsuario =pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsario = null;
const corPadrao = corUsario || 'preta'
console.log(nivelUsuario, corPadrao);

if (pontuacaoUsuario >= 1000){
	console.log('Usuário VIP');
} else{
	console.log('Usuário normal');
}
