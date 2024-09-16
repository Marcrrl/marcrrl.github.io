'use strict';

function gestionarFicheroXML(xmlDoc) {
	const librerias = xmlDoc.querySelectorAll('libreria');
	function obtenerLibroMasBarato(libros) {
		let libroMasBarato = libros[0];
		for (let i = 1; i < libros.length; i++) {
			if (parseInt(libros[i].querySelector('precio').textContent) < parseInt(libroMasBarato.querySelector('precio').textContent)) {
				libroMasBarato = libros[i];
			}
		}
		return libroMasBarato;
	}
	librerias.forEach(libreria => {
		const libros = libreria.querySelectorAll('libro');
		const tabla = document.createElement('table');
		const nombreLibreria = libreria.querySelector('nombre').textContent;

		const header = tabla.createTHead();
		const row = header.insertRow();
		const cabeseras = ['ISBN', 'Título', 'Nivel', 'Autor', 'Editorial', 'Fecha de Publicación', 'Página Web', 'Precio'];
		cabeseras.forEach(headerText => {
			const th = document.createElement('th');
			th.textContent = headerText;
			row.appendChild(th);
		});

		const libroMasBarato = obtenerLibroMasBarato(libros);

		libros.forEach(libro => {
			const tr = tabla.insertRow();
			Object.values(libro.children).forEach(child => {
				const td = tr.insertCell();
				td.textContent = child.textContent;
			});
			if (libro === libroMasBarato) {
				tr.className = `barato`;
			}
		});

		document.body.appendChild(document.createElement('br'));
		const titulo = document.createElement('h2');
		titulo.textContent = `Librería: ${nombreLibreria}`;
		document.body.appendChild(titulo);
		document.body.appendChild(tabla);
	});

}
loadLDocA("libros.xml");
