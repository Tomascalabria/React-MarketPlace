import React from "react";
import { Form, Button} from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';

export const Login = ({ signIn, status }) =>{

       return (
        
        <>   
  <Form className="loginContainer">
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label className="labelEmail">Email address</Form.Label>
    <Form.Control  className="email" type="email" placeholder="Enter email" required="required" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3  " controlId="formBasicPassword">
    <Form.Label  className="labelPassword">Password</Form.Label>
    <Form.Control className="password"  type="password" placeholder="Password" required="required" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" className="checkbox" label="Acepto Terminos y Condiciones"  required="required"  />
  </Form.Group>
  <Button variant="primary" type="submit">
      
    Submit
  </Button>

 <div>
    {status === "init" && <span>Intentando de restaurar sesión...</span>}
    {status === "restored" && <button className="googleLogin" onClick={signIn}><GoogleLogin/></button>}

    {status === "init" && console.log('sesion iniciada')  || status === "restored" && console.log('sesion restaurada')}
  </div>

</Form>
    
     
         </>
       )};
  export default Login;