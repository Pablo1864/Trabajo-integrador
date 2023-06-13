 // Array de imágenes para el primer carrusel
var imagenes = [
  "duster.jpg",
  "clio.jpg",
  "captur.jpg"
];
var informacion = [
  "Renault Duster",
  "Renault Clio",
  "Renault Captur",
  
];
var indiceActual = 0;
var imagenCarrusel = document.getElementById("imagen-carrusel");
var infoCarrusel = document.getElementById("info-carrusel");

// Función para cambiar la imagen y la información del carrusel
function cambiarImagen() {
  imagenCarrusel.src = imagenes[indiceActual];
  infoCarrusel.textContent = informacion[indiceActual];
}

// Función para avanzar a la siguiente imagen
function siguienteImagen() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  cambiarImagen();
}

// Función para retroceder a la imagen anterior
function imagenAnterior() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  cambiarImagen();
}

// Cargar la primera imagen y la información al cargar la página
cambiarImagen();

// Escuchar los clics en los botones de navegación
document.getElementById("boton-anterior").addEventListener("click", imagenAnterior);
document.getElementById("boton-siguiente").addEventListener("click", siguienteImagen);

// Array de imágenes para el segundo carrusel
var imagenes2 = [
  "raptor.jpg",
  "focus.jpg",
  "fiesta.jpg"
];
var informacion2 = [
  "Ford Raptor",
  "Ford Focus",
  "Ford Fiesta",
  
];
var indiceActual2 = 0;
var imagenCarrusel2 = document.getElementById("imagen-carrusel2");
var infoCarrusel2 = document.getElementById("info-carrusel2");

// Función para cambiar la imagen y la información del segundo carrusel
function cambiarImagen2() {
  imagenCarrusel2.src = imagenes2[indiceActual2];
  infoCarrusel2.textContent = informacion2[indiceActual2];
}

// Función para avanzar a la siguiente imagen del segundo carrusel
function siguienteImagen2() {
  indiceActual2++;
  if (indiceActual2 >= imagenes2.length) {
    indiceActual2 = 0;
  }
  cambiarImagen2();
}

// Función para retroceder a la imagen anterior del segundo carrusel
function imagenAnterior2() {
  indiceActual2--;
  if (indiceActual2 < 0) {
    indiceActual2 = imagenes2.length - 1;
  }
  cambiarImagen2();
}

// Cargar la primera imagen y la información del segundo carrusel al cargar la página
cambiarImagen2();

// Escuchar los clics en los botones de navegación del segundo carrusel
document.getElementById("boton-anterior2").addEventListener("click", imagenAnterior2);
document.getElementById("boton-siguiente2").addEventListener("click", siguienteImagen2);

// Array de imágenes para el tercer carrusel
var imagenes3 = [
  "onix.jpg",
  "cruze.jpg",
  "joy.webp"
  
];
var informacion3 = [
  "Chevrolet Onix",
  "Chrevrolet Cruze",
  "Chevrolet Joy",
 
];
var indiceActual3 = 0;
var imagenCarrusel3 = document.getElementById("imagen-carrusel3");
var infoCarrusel3 = document.getElementById("info-carrusel3");

// Función para cambiar la imagen y la información del tercer carrusel
function cambiarImagen3() {
  imagenCarrusel3.src = imagenes3[indiceActual3];
  infoCarrusel3.textContent = informacion3[indiceActual3];
}

// Función para avanzar a la siguiente imagen del tercer carrusel
function siguienteImagen3() {
  indiceActual3++;
  if (indiceActual3 >= imagenes3.length) {
    indiceActual3 = 0;
  }
  cambiarImagen3();
}

// Función para retroceder a la imagen anterior del tercer carrusel
function imagenAnterior3() {
  indiceActual3--;
  if (indiceActual3 < 0) {
    indiceActual3 = imagenes3.length - 1;
  }
  cambiarImagen3();
}

// Cargar la primera imagen y la información del tercer carrusel al cargar la página
cambiarImagen3();

// Escuchar los clics en los botones de navegación del tercer carrusel
document.getElementById("boton-anterior3").addEventListener("click", imagenAnterior3);
document.getElementById("boton-siguiente3").addEventListener("click", siguienteImagen3);

// Array de imágenes para el cuarto carrusel
var imagenes4 = [
  "saveiro.webp",
  "amarok.webp",
  "Vento.webp"
 
];
var informacion4 = [
  "Volkswagen Saveiro" ,
  "Volkswagen Amarok",
  "Volkswagen Vento",
 
];
var indiceActual4 = 0;
var imagenCarrusel4 = document.getElementById("imagen-carrusel4");
var infoCarrusel4 = document.getElementById("info-carrusel4");

// Función para cambiar la imagen y la información del cuarto carrusel
function cambiarImagen4() {
  imagenCarrusel4.src = imagenes4[indiceActual4];
  infoCarrusel4.textContent = informacion4[indiceActual4];
}

// Función para avanzar a la siguiente imagen del cuarto carrusel
function siguienteImagen4() {
  indiceActual4++;
  if (indiceActual4 >= imagenes4.length) {
    indiceActual4 = 0;
  }
  cambiarImagen4();
}

// Función para retroceder a la imagen anterior del cuarto carrusel
function imagenAnterior4() {
  indiceActual4--;
  if (indiceActual4 < 0) {
    indiceActual4 = imagenes4.length - 1;
  }
  cambiarImagen4();
}

// Cargar la primera imagen y la información del cuarto carrusel al cargar la página
cambiarImagen4();

// Escuchar los clics en los botones de navegación del cuarto carrusel
document.getElementById("boton-anterior4").addEventListener("click", imagenAnterior4);
document.getElementById("boton-siguiente4").addEventListener("click", siguienteImagen4);






