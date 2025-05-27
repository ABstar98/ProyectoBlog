// Seleccionamos los elementos del formulario
let nombreInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let mensajeInput = document.getElementById('message');
let btnEnviar = document.querySelector('.btn-submit');

// Evento para capturar los datos al hacer clic en el botón de enviar
btnEnviar.addEventListener('click', function(event) {
    // Prevenir el comportamiento por defecto del formulario (evita que la página se recargue)
    event.preventDefault();

    // Tomar los valores de los campos
    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();
    let mensaje = mensajeInput.value.trim();

    // Validación: verificar si los campos están completos
    if (nombre === '' || email === '' || mensaje === '') {
        // Mostrar ventana emergente de error
        alert("Por favor, complete todos los campos.");
        console.log('Faltan campos por completar.');
    } else {
        // Mostrar ventana emergente de éxito
        alert("Los datos fueron enviados correctamente.");
        console.log('Datos enviados correctamente:');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        // Limpiar el formulario después del envío
        nombreInput.value = '';
        emailInput.value = '';
        mensajeInput.value = '';
    }
});

// Crear y agregar un nuevo párrafo al contenido principal
const nuevoParrafo = window.document.createElement('p');
nuevoParrafo.textContent = "Texto del párrafo agregado desde JS";
const contenido = document.getElementById('contenidoMain');
contenido.appendChild(nuevoParrafo);

console.log(nuevoParrafo);
