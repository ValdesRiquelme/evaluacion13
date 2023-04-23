function ocultarFormularios() {
    // Obtener el ancho de la pantalla
    var screenWidth = window.innerWidth;
  
    // Obtener los formularios por sus ids
    var form1 = document.getElementById('miFormulario');
    var form2 = document.getElementById('miFormulario2');
  
    // Si el ancho de la pantalla es menor o igual a 768px
    if (screenWidth <= 768) {
      // Ocultar los formularios
      form1.style.display = 'none';
      form2.style.display = 'none';
    } else {
      // Mostrar los formularios
      form1.style.display = 'block';
      form2.style.display = 'block';
    }
  }
  
  // Llamar a la función cuando se carga la página
ocultarFormularios();
  // Llamar a la función cuando se cambia el tamaño de la pantalla
window.addEventListener('resize', ocultarFormularios);

// Obtener los enlaces por sus href
var link1 = document.querySelector('a[href="#titulo2"]');
var link2 = document.querySelector('a[href="#reserva"]');

// Obtener los formularios por sus ids
var form1 = document.getElementById('miFormulario');
var form2 = document.getElementById('miFormulario2');

// Agregar un controlador de eventos para el evento 'click' del primer enlace
link1.addEventListener('click', function(event) {
  // Evitar que el enlace siga su URL
  event.preventDefault();

  // Mostrar el primer formulario
  form1.style.display = 'block';
});

// Agregar un controlador de eventos para el evento 'click' del segundo enlace
link2.addEventListener('click', function(event) {
  // Evitar que el enlace siga su URL
  event.preventDefault();

  // Mostrar el segundo formulario
  form2.style.display = 'block';
});

$(document).ready(function(){
  $("#miFormulario").submit(function(event){
      event.preventDefault();
      var nombre = $("#inputEmail4").val();
      var correo = $("#inputPassword4").val();
      var telefono = $("#inputAddress").val();
      var motivo = $("input[name='especialidad']").val();
      var mensaje = "Estimado " + nombre + ", gracias por contactarnos. Hemos recibido tu mensaje sobre " + motivo + ". Nos comunicaremos contigo al correo " + correo + " o al teléfono " + telefono + ". Gracias por preferirnos";
      alert(mensaje);
  });
});
$(document).ready(function(){
  $("#miFormulario2").submit(function(event){
      event.preventDefault();
      var nombre = $("#miFormulario2 #inputEmail4").val();
      var correo = $("#miFormulario2 #inputPassword4").val();
      var telefono = $("#miFormulario2 #inputAddress").val();
      var fecha = $("#miFormulario2 #inputAddress2").val();
      var hora = $("#miFormulario2 #inputCity").val();
      var cantidad = $("#miFormulario2 input[type='number'][placeholder='Asistentes']").val();
      var mensaje = "Estimado " + nombre + ", agradecemos por reservar con nosotros. Hemos registrado " + cantidad + " asistentes para el día " + fecha + " a las " + hora + ". Se ha enviado el código de confirmación al correo " + correo + ". Gracias por preferirnos";
      alert(mensaje);
  });
});
$(document).ready(function(){
  $(".card").click(function(){
      $(this).find("img").css({
          "position": "absolute",
          "top": 0,
          "left": 0,
          "width": "100%",
          "height": "100%",
          "z-index": -1
      });
      $(this).css({
          "position": "fixed",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)",
          "z-index": "9999",
          "width": "80%",
          "height": "80%"
      });
      $(this).addClass("expanded");
  });
  $(".close").click(function(event){
      event.stopPropagation();
      $(this).closest(".card").css({
          "position": "",
          "top": "",
          "left": "",
          "transform": "",
          "z-index": "",
          "width": "",
          "height": ""
      });
      $(this).closest(".card").find("img").css({
          "position": "",
          "top": "",
          "left": "",
          "width": "",
          "height": "",
          "z-index": ""
      });
      $(this).closest(".card").removeClass("expanded");
  });
  $(document).scroll(function(){
      $(".card.expanded").css({
          "top": $(window).scrollTop() + $(window).height() / 2
      });
  });
});