function mostrarMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("activo");
}

function mostrarPromo() {
  alert("Promoción especial: compra 2 boletos Premium y recibe 1 bebida gratis.");
}

function seleccionarBoleto(tipo) {
  const mensaje = document.getElementById("boletoSeleccionado");
  mensaje.textContent = "Seleccionaste el boleto: " + tipo + ".";
}

function registrarUsuario(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const zona = document.getElementById("zona").value;
  document.getElementById("respuesta").textContent =
    "Registro exitoso. " + nombre + ", tu zona favorita es: " + zona + ".";
  document.querySelector(".formulario").reset();
}
