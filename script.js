// Función para obtener el importe según el tipo de seguro seleccionado
function obtenerImporte(tipoSeguro) {
    let precio = 0;
    if (tipoSeguro === 'básico') {
        return 500; 
    } else if (tipoSeguro === 'intermedio') {
        return 1000; 
    } else if (tipoSeguro === 'premium') {
        return 1500; 
    }
    return 0; 
}

// Función para mostrar el importe en la pantalla
function mostrarImporte() {
    const select = document.getElementById('seguro');
    const selectedOption = select.options[select.selectedIndex];
    const tipoSeguro = selectedOption.value;
    const importe = obtenerImporte(tipoSeguro);

    // Mostrar el importe en el elemento con id "precio"
    document.getElementById('precio').innerText = `El importe del seguro ${tipoSeguro} es: $${importe}`;
}

// Asignar el evento al cambio en el select
document.getElementById('seguro').addEventListener('change', mostrarImporte);

// Mostrar el importe al cargar la página
mostrarImporte();

