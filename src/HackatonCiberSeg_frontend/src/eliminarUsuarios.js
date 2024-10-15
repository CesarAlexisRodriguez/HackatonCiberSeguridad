import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, CardBody, Button, ButtonGroup, CardTitle, FormGroup } from 'react-bootstrap';
import { Form } from 'react-router-dom';

export const EliminarUsuarios = () => {
    // Estado para almacenar la lista de usuarios
    const [usuarios, setUsuarios] = useState([]);
    

    // Función para eliminar un usuario
    const eliminarUsuario = (id) => {
      // Filtra los usuarios, removiendo el usuario con el ID que coincide
      const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
      setUsuarios(nuevosUsuarios);
    };
  
    return (
     <Container >

                <Card>
                
                {/* BARRA DE BUSQUEDA */}
                <CardBody>
                <CardTitle>License Chain</CardTitle>
                <ButtonGroup>
                    <Button variant="secondary">Ingresar</Button>
                    <Button variant="secondary">Registro de Usuario</Button>
                    <Button variant="secondary">Actualizar Usuario</Button>
                    <Button variant="secondary">Eliminar Usuario</Button>
                </ButtonGroup>
                </CardBody>
                </Card>


        <Card>
            <Form>
                {/* Lista de usuarios */}
                <FormGroup>
                {usuarios.length === 0 ? (
                    <p>No hay usuarios agregados aún.</p>
                ): 
                (
                    usuarios.map((usuario) => (
                    <FormGroup key={usuario.id}>
                        <h3>{usuario.nombre}</h3>
                        <p>{usuario.correo}</p>
                        <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                    </FormGroup>
                    ))
                )}
                </FormGroup>
            </Form>
        </Card>
     </Container>

    );
};
  

  