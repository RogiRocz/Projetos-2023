const Colors = {
	WHITE: '#FFFFFF',
	RED: '#FF0000',
	ORANGE: '#FF7F00',
	YELLOW: '#FFFF00',
	GREEN: '#00FF00',
	LIGTHBLUE: '#00FFFF',
	BLUE: '#0000FF',
	PURPLE: '#8B00FF',
	PINK: '#FF006C'
};

function addColorId(h3){
	let color = "color" + h3.textContent;
	h3.setAttribute("id", color);
}

function formatarValor(dFrag, val) {
	h3 = document.createElement('h3');
	h3.textContent = parseInt(val / 10);
	addColorId(h3);
	dFrag.appendChild(h3);
	h3 = document.createElement('h3');
	h3.textContent = val % 10;
	addColorId(h3);
	dFrag.appendChild(h3);
}

function addMarcador(dFrag) {
	h3 = document.createElement('h3');
	h3.setAttribute("class", "marcadores");
	h3.textContent = ":";
	dFrag.appendChild(h3);
}

function atualizarData() {
	let main = document.querySelector("main");
	while (main.firstChild) {
		main.removeChild(main.firstChild);
	}

	let d = new Date();
	let s = d.getSeconds();
	let m = d.getMinutes();
	let h = d.getHours();

	const dFrag = document.createDocumentFragment();
	// add horas
	formatarValor(dFrag, h);
	// add marcadores
	addMarcador(dFrag);
	// add minutos
	formatarValor(dFrag, m);
	// add marcadores
	addMarcador(dFrag);
	// segundos
	formatarValor(dFrag, s);

	main.appendChild(dFrag);
}

let atualizaData = setInterval(atualizarData, 1000);