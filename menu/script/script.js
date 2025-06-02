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

const fotos = [
  "img/fotos/moldura0.png",
  "img/fotos/moldura1.png",
  "img/fotos/moldura2.png",
  "img/fotos/moldura3.png",
  "img/fotos/moldura4.png",
  "img/fotos/moldura5.png",
  "img/fotos/moldura6.png",
  "img/fotos/moldura7.png",
  "img/fotos/moldura8.png",
  "img/fotos/moldura9.png",
  "img/fotos/moldura10.png",
]

fotos.forEach(src => {
  const img = new Image()
  img.src = src
})

let indice = 0;
const moldura =  document.querySelector("img#moldura-branco")
const btn = document.getElementById("btn-moldura")

if (moldura && btn) {
  btn.addEventListener('click', () => {
    indice = (indice + 1) % fotos.length
    moldura.src = fotos[indice]

    moldura.classList.remove('shake')
    void moldura.offsetWidth
    moldura.classList.add('shake')
  })
}