$("document").ready(function () {
  $("#ocultarPrimero").click(function () {
    $("p:first").hide();
  });
  $("#ocultarUltimo").click(function () {
    $("p:last").hide();
  });
  $("#ocultarTodo").click(function () {
    $("p").hide();
  });
  $("#mostrarTodo").click(function () {
    $("p:last").hide();
  });

  $("input").click(function () {
    $(this).css("box-shadow", "0 0 4px 2px blue");
  });

  $("input").blur(function () {
    $(this).css("box-shadow", "none");
  });
});
