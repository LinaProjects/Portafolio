const btnModoNoche = document.getElementById('modoNocheBtn');
const html = document.documentElement;

console.log('Botón encontrado:', btnModoNoche);

function activarModoNoche() {
  console.log('Click detectado!');
  html.classList.toggle('modo-noche');
  console.log('Clase modo-noche agregada');
  
  if (html.classList.contains('modo-noche')) {
    btnModoNoche.textContent = '☀️';
    localStorage.setItem('modoNoche', 'true');
    console.log('Modo noche activado');
  } else {
    btnModoNoche.textContent = '🌙';
    localStorage.setItem('modoNoche', 'false');
    console.log('Modo noche desactivado');
  }
}

btnModoNoche.addEventListener('click',activarModoNoche);

function cargarPreferencia() {
  const modoNocheGuardado = localStorage.getItem('modoNoche');
  if (modoNocheGuardado === 'true') {
    html.classList.toggle('modo-noche');
    btnModoNoche.textContent = '☀️';
  }
}

cargarPreferencia();