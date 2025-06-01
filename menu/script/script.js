window.onload = () => {
  const splash = document.getElementById('splash-screen');
  const main = document.querySelectorAll("div.main-content")
  const particles = document.getElementById('particles')
  const papiro = document.getElementById('papiro')
  const timeout = 500

  setTimeout(() => {
    splash.classList.add('fade-out');
    
    // Espera a transição terminar
    setTimeout(() => {
      splash.style.display = 'none';
      particles.style.display = 'block'
      main.forEach(main => main.style.display = 'block')
      papiro.classList.add('visible')
    }, 800);
  }, timeout);
};