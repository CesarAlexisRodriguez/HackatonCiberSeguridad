import { useState } from "react";
import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel, ButtonGroup, CardBody, CardTitle } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const CrearUsuarios = () => {
  

    const [data,setData] = useState({}); 
  
    const onChangeRegistrer  = (e)=>{
      e.preventDefault();
      const nData = data;
      nData[e.target.name] = e.target.value;
      setData(nData);
      console.log(nData)
    };
  
    const onSubmit = ()=>{
     console.log(data)
    }
  
    return(
      
      <Container>

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
        <Card.Body>
          <Card.Title>Registro de usuarios</Card.Title>
            <Form>
  
              <FormGroup>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl onChange={onChangeRegistrer} name ="name" placeholder="Ingresa tu nombre"></FormControl>
              </FormGroup>
  
              <FormGroup>
                  <FormLabel>Apellido</FormLabel>
                  <FormControl onChange={onChangeRegistrer} name="last_name" placeholder="Ingresa tu apellido"></FormControl>
              </FormGroup>
  
              <FormGroup>
                 <FormLabel>Correo</FormLabel>
                 <FormControl onChange={onChangeRegistrer} name="email" type="email" placeholder="Ingresa tu correo"></FormControl>
              </FormGroup>
  
              <FormGroup>
                 <FormLabel>Contrseña</FormLabel>
                 <FormControl onChange={onChangeRegistrer} name="password" type="password" placeholder="Ingresa tu contraseña"></FormControl>
              </FormGroup>

              <Card>
              <Button onClick={()=>onSubmit()}>Registrate!</Button>
              </Card>
            
            </Form>
  
        </Card.Body>
      </Card>
      
      </Container>
      
    );
}

  