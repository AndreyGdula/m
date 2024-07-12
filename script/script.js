document.getElementById('letter').addEventListener('click', openEnvelope);

function openEnvelope() {
    const envelope = document.getElementById('letter');
    const papel = document.querySelector("div.papel")
    


    let frame = 1;
    const totalFrames = 10; // Número total de frames na animação
    const frameInterval = 100; // Intervalo entre frames em milissegundos

    const animationInterval = setInterval(() => {
        if (frame > totalFrames) {
            clearInterval(animationInterval);
            papel.style.display = 'block';
        } else {
            envelope.src = `img/frame${frame}.png`;
            frame++;
        }
    }, frameInterval);
}
