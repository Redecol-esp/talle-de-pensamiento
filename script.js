function abrir(id) {
  document.getElementById('inicio').style.display = 'none';
  document.querySelectorAll('.subpantalla').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'flex';
}

function volver() {
  document.querySelectorAll('.subpantalla').forEach(s => s.style.display = 'none');
  document.getElementById('inicio').style.display = 'flex';
}
