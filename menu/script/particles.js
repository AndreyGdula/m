particlesJS('particles', {
  particles: {
    number: {
      value: 120, // Quantidade de partículas
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#D4AF37" // Cor das partículas
    },
    shape: {
      type: "circle", // Pode ser circle, edge, triangle, etc
    },
    opacity: {
      value: 0.8,
      random: true
    },
    size: {
      value: 1.5,
      random: true
    },
    line_linked: {
        enable: false
    },
    move: {
      enable: true,
      speed: 5,
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
