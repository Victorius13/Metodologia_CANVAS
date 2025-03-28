function actualizarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById("hora").textContent = hora;
}

actualizarHora();
setInterval(actualizarHora, 1000);
