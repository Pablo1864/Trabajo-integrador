const carruseles = [
  {
    id: 'carousel1',
    imagenes: ['car1.jpg', 'car2.jpg', 'descarga.jpg'],
    indiceActual: 0
  },
  {
    id: 'carousel2',
    imagenes: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    indiceActual: 0
  }
];

function mostrarImagen(indice, carrusel) {
  const contenedor = document.getElementById(carrusel.id);
  contenedor.innerHTML = ''; // Limpiar el contenido anterior del carrusel
  const imagen = document.createElement('img');
  imagen.src = carrusel.imagenes[indice];
  imagen.classList.add('activo'); // Agregar la clase 'activo' para mostrar la imagen
  contenedor.appendChild(imagen);
}


function irAImagenAnterior(event) {
  const carruselId = event.target.parentNode.parentNode.id;
  const carrusel = carruseles.find((c) => c.id === carruselId);
  carrusel.indiceActual--;
  if (carrusel.indiceActual < 0) {
    carrusel.indiceActual = carrusel.imagenes.length - 1;
  }
  mostrarImagen(carrusel.indiceActual, carrusel);
}

function irAImagenSiguiente(carrusel) {
  carrusel.indiceActual++;
  if (carrusel.indiceActual >= carrusel.imagenes.length) {
    carrusel.indiceActual = 0;
  }
  mostrarImagen(carrusel.indiceActual, carrusel);
}


carruseles.forEach((carrusel) => {
  mostrarImagen(carrusel.indiceActual, carrusel);

  const botonAnterior = document.querySelector(`#${carrusel.id} .boton-anterior`);
  const botonSiguiente = document.querySelector(`#${carrusel.id} .boton-siguiente`);

  botonAnterior.addEventListener('click', irAImagenAnterior);
  botonSiguiente.addEventListener('click', irAImagenSiguiente);
});


