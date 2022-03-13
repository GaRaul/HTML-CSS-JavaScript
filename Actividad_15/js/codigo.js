function cambiarfoto(num) {
    
  // Cambia la ruta de la imagen seleccionada
  var foto = "../img/foto" + num + ".jpg";

  // Cambiar imagen
  document.images["imagenSeleccionada"].src = foto;

  var infoFoto = document.images["fotos" + num].alt;

  // Cambia la info de la imagen
  info.innerHTML = infoFoto;
}
