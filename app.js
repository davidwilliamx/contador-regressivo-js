document.addEventListener("DOMContentLoaded", function () {

    const horasElement = document.getElementById('horas');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');

    let tempo = 24;
    let tempoTotal = tempo * 3600; // 1 hora em segundos

    const atualizarContador = () => {
        let horas = Math.floor(tempoTotal / 3600);
        let minutos = Math.floor((tempoTotal % 3600) / 60);
        let segundos = tempoTotal % 60;

        horasElement.textContent = horas.toString().padStart(2, '0');
        minutosElement.textContent = minutos.toString().padStart(2, '0');
        segundosElement.textContent = segundos.toString().padStart(2, '0');

        tempoTotal--;

        if (tempoTotal === 0) {
            clearInterval(intervalo);
        }
    };

    const intervalo = setInterval(atualizarContador, 1000);

});

