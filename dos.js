// otraPagina.js

function adivinarPalabra() {
    // Obtiene el valor del cuadro de texto
    const palabra = document.getElementById("palabraInput").value;
    
    // Selecciona el elemento donde se mostrará el mensaje
    const mensajeAdivinanza = document.getElementById("mensajeAdivinanza");
    const btnImagen = document.getElementById("btnImagen");
    
    // Si el usuario escribió una palabra, muestra el mensaje con la palabra adivinada
    if (palabra) {
        mensajeAdivinanza.textContent = `Qué locura, tu palabra es: ${palabra}`;
        mensajeAdivinanza.classList.add("mensaje-visible"); // Muestra el mensaje
        
        // Muestra el botón adicional para ver la imagen girando
        btnImagen.classList.remove("oculto");
    } else {
        mensajeAdivinanza.textContent = "¡Pero sin vergüenza, escribe la palabra!";
        mensajeAdivinanza.classList.add("mensaje-visible");
    }
}

// Función para abrir la página con la imagen girando
function abrirPaginaConImagen() {
    window.location.href = "tres.html";
}
