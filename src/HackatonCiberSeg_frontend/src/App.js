import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Componente principal de la aplicación
const UsuariosApp = () => {
  // Estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');

  // Función para manejar el cambio en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'correo') {
      setCorreo(value);
    }
  };

  // Función para agregar un nuevo usuario
  const agregarUsuario = (e) => {
    e.preventDefault();
    // Crea un nuevo usuario
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      correo,
    };
    // Actualiza la lista de usuarios
    setUsuarios([...usuarios, nuevoUsuario]);
    // Limpiar los campos del formulario
    setNombre('');
    setCorreo('');
  };

  // Función para eliminar un usuario
  const eliminarUsuario = (id) => {
    // Filtra los usuarios, removiendo el usuario con el ID que coincide
    const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevosUsuarios);
  };

  return (
    <div className="container">
      <h1>Gestión de Usuarios</h1>

      {/* Formulario para agregar usuarios */}
      <form onSubmit={agregarUsuario}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Agregar Usuario</button>
      </form>

      {/* Lista de usuarios en forma de cards */}
      <div className="usuarios-list">
        {usuarios.length === 0 ? (
          <p>No hay usuarios agregados aún.</p>
        ) : (
          usuarios.map((usuario) => (
            <div key={usuario.id} className="card">
              <h3>{usuario.nombre}</h3>
              <p>{usuario.correo}</p>
              <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsuariosApp;
