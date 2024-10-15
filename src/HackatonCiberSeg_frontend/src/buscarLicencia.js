import { useState } from "react";
import { Button, Card, CardTitle, Container, Form, FormControl, FormGroup, FormLabel, CardBody} from "react-bootstrap";


export const BuscarLicencia = () => {
  const [data,setData] = useState({}); 

  const onChange  = (e)=>{
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
    <Container className="mt-3">

        <Card >
            <CardBody>
            <CardTitle>License Chain</CardTitle>
            <Button variant="secondary">Ingresar</Button>
            <Button variant="secondary">Registro de Usuario</Button>
            <Button variant="secondary">Actualizar Usuario</Button>
            <Button variant="secondary">Eliminar Usuario</Button>

            </CardBody>
        </Card>
    <Card>
      <CardBody>
        <Form>
          <FormGroup>
          <CardTitle>Ingresa tus datos </CardTitle>
            <FormLabel>Correo electronico:</FormLabel>
            {/* place holder= texto informativo para el usuario */}
            <FormControl placeholder="Ingresa tu correo electronico"
            type="email" name="email" onChange={onChange}></FormControl>
          </FormGroup>

          <FormGroup>
            <FormLabel>Contraseña</FormLabel>
            <FormControl placeholder="Ingresa tu contraseña"
            type="password" name="password" onChange={onChange}></FormControl>
          </FormGroup>

        </Form>

      </CardBody>
    </Card>

    <Card>
        <Button onClick={()=>onSubmit()}>Buscar licencia</Button>
    </Card>

    </Container>    
  );
}

