/* Requerimientos JavaScript */
/* Función para Tooltip */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /* Evento click sobre botón con id = enviarMensaje */
  $("#enviarMensaje").click(function(){
    alert("El mensaje fue enviado correctamente...");
})