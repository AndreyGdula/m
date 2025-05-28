window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');
  const particles = document.getElementById('particles')
  const timeout = 2000

  // Espera 2 segundos (ou o tempo que quiser)
  setTimeout(() => {
    splash.classList.add('fade-out');
    
    // Espera a transição terminar
    setTimeout(() => {
      splash.style.display = 'none';
      particles.style.display = 'block'
      main.style.display = 'block';
    }, 800);
  }, timeout);
});