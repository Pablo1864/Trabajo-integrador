const imagenesCarrusel = document.querySelectorAll('#carousel img');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');
let indiceActual = 0;

function mostrarImagen(indice) {
  imagenesCarrusel.forEach((imagen, indiceImagen) => {
    if (indiceImagen === indice) {
      imagen.classList.add('activo');
    } else {
      imagen.classList.remove('activo');
    }
  });
}

function irAImagenAnterior() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenesCarrusel.length - 1;
  }
  mostrarImagen(indiceActual);
}

function irAImagenSiguiente() {
  indiceActual++;
  if (indiceActual >= imagenesCarrusel.length) {
    indiceActual = 0;
  }
  mostrarImagen(indiceActual);
}

botonAnterior.addEventListener('click', irAImagenAnterior);
botonSiguiente.addEventListener('click', irAImagenSiguiente);

// Mostrar la primera imagen al cargar la página
mostrarImagen(indiceActual);


