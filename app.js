// Colocar la fecha de hoy automáticamente
document.getElementById('fecha').valueAsDate = new Date();

// Acción del botón para WhatsApp
document.getElementById('btnWhatsApp').addEventListener('click', () => {
  const folio = document.getElementById('folio').value;
  const fecha = document.getElementById('fecha').value;
  const nombre = document.getElementById('nombre').value;
  const direccion = document.getElementById('direccion').value;
  const cuota = document.getElementById('cuota').value;
  const comentarios = document.getElementById('comentarios').value;

  // Capturar servicios seleccionados
  let servicios = [];
  if (document.getElementById('srvInstalacion').checked) servicios.push('Instalación');
  if (document.getElementById('srvMultimedia').checked) servicios.push('Paquete Multimedia');

  // Capturar meses seleccionados
  let meses = Array.from(document.querySelectorAll('.mes-check:checked')).map(c => c.value);

  // Construir mensaje dinámico
  let mensaje = `*SERVINET JC - Comprobante de Pago*%0A` +
    `*Folio Nº:* ${folio}%0A` +
    `*Fecha:* ${fecha}%0A` +
    `*Cliente:* ${nombre}%0A` +
    `*Dirección:* ${direccion || 'No especificada'}%0A` +
    `*Servicio:* ${servicios.join(', ') || 'Ninguno'}%0A` +
    `*Meses Pagados:* ${meses.join(', ') || 'Ninguno'}%0A` +
    `*Total Pagado:* Q ${cuota || '0.00'}%0A`;

  // Incluir observaciones si existen
  if (comentarios.trim() !== '') {
    mensaje += `*Observaciones:* ${comentarios}%0A`;
  }

  mensaje += `%0A¡Gracias por su preferencia! 🌐`;

  // Abrir WhatsApp con el texto preparado
  window.open(`https://api.whatsapp.com/send?text=${mensaje}`, '_blank');
});