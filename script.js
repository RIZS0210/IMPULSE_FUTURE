
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = "¡Vuelve! 😔";
    } else {
        document.title = "¡Gracias por regresar! 😊";
        // Restaurar el título original después de 3 segundos
        setTimeout(() => {
            document.title = "IMPULSA TU FUTURO";
        }, 3000);
    }
});


const btnRecursos = document.getElementById('btn-recursos');
const seccionRecursos = document.getElementById('recursos');

btnRecursos.addEventListener('click', function(e) {
    e.preventDefault(); // evita que el enlace haga scroll inmediato
    seccionRecursos.style.display = 'block'; // muestra la sección
    seccionRecursos.scrollIntoView({ behavior: 'smooth' }); 

    // Opcional: animación de aparición con fade
    seccionRecursos.classList.add('show');
});
