// Cambia el título de la pestaña cuando el usuario cambia de ventana
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = "¡Vuelve! 😔";
    } else {
        document.title = "¡Gracias por regresar!😊";
        // Restaurar el título original después de 3 segundos
        setTimeout(() => {
            document.title = "IMPULSA TU FUTURO";
        }, 3000);
    }
});
