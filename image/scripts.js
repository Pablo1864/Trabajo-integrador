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

  // Eliminar los mensajes de error existentes
  limpiarMensajesError();

  if (nombre === '') {
    mostrarMensajeError('nombre', 'El campo Nombre es obligatorio.');
    return false;
  }

  if (email === '') {
    mostrarMensajeError('email', 'El campo Email es obligatorio.');
    return false;
  }

  if (!regexEmail.test(email)) {
    mostrarMensajeError('email', 'El formato del correo electrónico es inválido.');
    return false;
  }

  if (telefono === '') {
    mostrarMensajeError('telefono', 'El campo Teléfono es obligatorio.');
    return false;
  }

  if (!regexTelefono.test(telefono)) {
    mostrarMensajeError('telefono', 'El número de teléfono es inválido.');
    return false;
  }

  if (ciudad === '') {
    mostrarMensajeError('ciudad', 'El campo Ciudad es obligatorio.');
    return false;
  }

  if (pais === '') {
    mostrarMensajeError('pais', 'El campo País es obligatorio.');
    return false;
  }

  if (mensaje === '') {
    mostrarMensajeError('mensaje', 'El campo Mensaje es obligatorio.');
    return false;
  }

  mostrarDatosEnviados(nombre, email, telefono, ciudad, pais, mensaje);
  limpiarFormulario();
  return false;
}

function mostrarMensajeError(campo, mensaje) {
  const campoInput = document.getElementById(campo);
  campoInput.classList.add('campo-error');

  const mensajeErrorExistente = document.querySelector(`#${campo} + .mensaje-error-formulario`);
  if (mensajeErrorExistente) {
    mensajeErrorExistente.remove();
  }

  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('mensaje-error');
  mensajeError.classList.add('mensaje-error-formulario');

  campoInput.parentNode.insertBefore(mensajeError, campoInput.nextSibling);
}

function limpiarMensajesError() {
  const mensajesError = document.querySelectorAll('.mensaje-error-formulario');
  mensajesError.forEach((mensajeError) => {
    mensajeError.remove();
  });

  const camposError = document.querySelectorAll('.campo-error');
  camposError.forEach((campoError) => {
    campoError.classList.remove('campo-error');
  });
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
    <h3>En la brevedad se contactara un representante con usted,muchas gracias</h3>
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

  limpiarMensajesError();
}

