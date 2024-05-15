document.getElementById('getData').addEventListener('click', obtenerPacientes);

function obtenerPacientes() {
  fetch('http://localhost:3000/pacientes')
    .then(response => response.json())
    .then(data => {
      // Aquí puedes manejar los datos recibidos
      console.log(data);
    })
    .catch(error => console.error('Error:', error));

    
}

