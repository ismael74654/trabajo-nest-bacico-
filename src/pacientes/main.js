document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const tipoCita = document.getElementById('tipoCita').value;
    const enfermedad = document.getElementById('enfermedad').value;
  
    // Crear objeto con los datos del paciente
    const pacienteNuevo = {
      nombre: nombre,
      fechaNacimiento: fechaNacimiento,
      tipoCita: tipoCita,
      enfermedad: enfermedad
    };
  
    // Enviar los datos al backend usando fetch
    fetch('http://localhost:3000/pacientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pacienteNuevo)
    })
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manejar la respuesta del backend
        console.log('Respuesta del backend:', data);
      })
      .catch(error => console.error('Error:', error));
  });
  