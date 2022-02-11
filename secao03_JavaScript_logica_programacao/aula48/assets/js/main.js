const inputTarefa = document.querySelector('.input_tarefa');
const btn = document.querySelector('.btn_add');
const tarefas = document.querySelector('.tarefas');


function criaTarefa(tarefa){
	li = criaLi();
	li.innerText = tarefa + ' ';
	tarefas.appendChild(li);
	limpaInput();
	criaBotaoTarefa();
	apagaTarefa();
	
}

function criaLi(){
	const li = document.createElement('li');
	return li;
}

inputTarefa.addEventListener('keypress', function(e){

	if(e.keyCode === 13){
		criaTarefa(inputTarefa.value);
	}
} );

function limpaInput(){
	inputTarefa.value = ''
	inputTarefa.focus();

}

function criaBotaoTarefa(){

	const btn = document.createElement('button');
	btn.innerText = 'Apagar';
	btn.setAttribute('class', 'apagar');
	btn.setAttribute('title', 'apaga tarefa');

	li.appendChild(btn);
}
document.addEventListener('click', function(e){
	const el = e.target;

	if(el.classList.contains('apagar')){
	  el.parentElement.remove();
	}
})

btn.addEventListener('click', function(){
	if(!inputTarefa.value)return;

	criaTarefa(inputTarefa.value);

})
