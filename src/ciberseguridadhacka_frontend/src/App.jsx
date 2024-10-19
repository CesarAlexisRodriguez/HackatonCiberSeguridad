import { useEffect, useState } from 'react';
import { useRestActor } from "@bundly/ares-react";
import {
  Container,
Card,
CardBody,
ButtonGroup,
Button,
CardTitle,
Form,
FormGroup,
FormLabel,
FormControl
} from "react-bootstrap"

function App() {
  const backend = useRestActor("backend");

  useEffect(() => {
    const res = backend.get("/Working");
  }, [])

  const onChangeRegistrer = (e)=>{
    console.log("esta jalando")
  }

  const onSubmit = ()=>{
    consle.log("Send data")
  }


  return(
<>
        <Container>
            <Card>
                <CardBody>

                    <ButtonGroup>
                        <Button variant="secondary" className="bottonT">Ingresar</Button>
                        <Button variant="secondary" className="bottonT">Registro de Usuario</Button>
                        <Button variant="secondary" className="bottonT">Actualizar Usuario</Button>
                        <Button variant="secondary" className="bottonT">Eliminar Usuario</Button>
                    </ButtonGroup>
                </CardBody>
            </Card>

            <Card>
                <Card.Body>
                    <CardTitle>Registro de usuarios</CardTitle>
                    <Form>
                        <FormGroup>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl onChange={onChangeRegistrer} name="name" placeholder="Ingresa tu nombre" />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Apellido</FormLabel>
                            <FormControl onChange={onChangeRegistrer} name="last_name" placeholder="Ingresa tu apellido" />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Correo</FormLabel>
                            <FormControl onChange={onChangeRegistrer} name="email" type="email" placeholder="Ingresa tu correo" />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl onChange={onChangeRegistrer} name="password" type="password" placeholder="Ingresa tu contraseña" />
                        </FormGroup>

                        <Card>
                            <Button onClick={onSubmit} className="bottonT">¡Regístrate!</Button>
                        </Card>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        </>
  )
}

export default App;