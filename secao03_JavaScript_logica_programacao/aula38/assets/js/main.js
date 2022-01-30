const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')



const estiloBody = getComputedStyle(document.body);
const backColorBody = estiloBody.backgroundColor;



for (let p of ps){
	p.style.backgroundColor = backColorBody;
	p.style.color = '#FFFFFF';
}

