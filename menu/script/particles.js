particlesJS('particles', {
  particles: {
    number: {
      value: 80, // Quantidade de partículas
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#D4AF37" // Cor das partículas
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
        enable: false
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      }
    }
  },
  retina_detect: true
});
