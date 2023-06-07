 // Validación del formulario

function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const ciudad = document.getElementById('ciudad').value;
  const pais = document.getElementById('pais').value;
  const mensaje = document.getElementById('mensaje').value;

  // Expresiones regulares para validar el número de teléfono y el formato del correo electrónico
  const regexTelefono = /^\d{10}$/; // 10 dígitos
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre === '' || email === '' || telefono === '' || ciudad === '' || pais === '' || mensaje === '') {
    mostrarMensajeError('Todos los campos son obligatorios');
    return false;
  }

  if (!regexTelefono.test(telefono)) {
    mostrarMensajeError('Teléfono inválido');
    return false;
  }

  if (!regexEmail.test(email)) {
    mostrarMensajeError('Formato de correo electrónico inválido');
    return false;
  }

  mostrarDatosEnviados(nombre, email, telefono, ciudad, pais, mensaje);
  limpiarFormulario();
  return false;
}

function mostrarMensajeError(mensaje) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('mensaje-error');
  document.getElementById('datosEnviados').innerHTML = '';
  document.getElementById('datosEnviados').appendChild(mensajeError);
}

function mostrarDatosEnviados(nombre, email, telefono, ciudad, pais, mensaje) {
  const datosEnviados = document.createElement('div');
  datosEnviados.innerHTML = `
    <h2>Datos enviados:</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Ciudad:</strong> ${ciudad}</p>
    <p><strong>País:</strong> ${pais}</p>
    <p><strong>Mensaje:</strong> ${mensaje}</p>
  `;
  document.getElementById('datosEnviados').innerHTML = '';
  document.getElementById('datosEnviados').appendChild(datosEnviados);
}

function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('ciudad').value = '';
  document.getElementById('pais').value = '';
  document.getElementById('mensaje').value = '';
}
