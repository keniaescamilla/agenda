import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/registro', {
        nombre,
        correo,
        contrasena,
      });

      console.log('Usuario registrado:', response.data);
      // Aquí puedes redirigir al usuario a la página de inicio de sesión u otra página.
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegistro}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
