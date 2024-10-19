import { useState } from "react";
import { Button, Card, CardTitle, Container, Form, FormControl, FormGroup, FormLabel, CardBody, ButtonGroup } from "react-bootstrap";

function LicenseChain() {
    // Estado para manejar los datos del formulario de registro
    const [registerData, setRegisterData] = useState({
        name: '',
        last_name: '',
        email: '',
        password: ''
    });

    // Manejar el cambio en los campos del formulario de registro
    const onChangeRegistrer = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    // Manejar el envío del formulario de registro
    const onSubmit = async () => {
        try {
            const response = await fetch("http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/save-license", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData) // Convertir los datos a JSON
            });

            if (!response.ok) {
                throw new Error("Error al registrar el usuario");
            }

            const data = await response.json();
            console.log("Usuario registrado:", data);
            // Aquí puedes manejar la respuesta como desees, por ejemplo, mostrar un mensaje al usuario
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    return (
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
    );
}

export default LicenseChain;
