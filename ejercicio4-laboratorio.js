$("document").ready(function () {
  $("#registroUsuario").submit(function () {
    return function () {
      let response = confirm("¿Seguro que desea enviar?");

      if (response) {
        let txtNombre = document.querySelector("#txtNombre").value;
        let txtCorreo = document.querySelector("#txtCorreo").value;

        //Validar el valor del campo nombre
        if (txtNombre.length > 50 || txtNombre.length < 2) {
          alert("Su nombre no es aceptado");
          return false;
        }

        if (
          txtCorreo.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) == null
        ) {
          alert("Correo Incorrecto");
          return false;
        }
      } else {
        return false;
      }
    };
  });
});
