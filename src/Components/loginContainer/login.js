import React, { useContext, useReducer, useState } from "react";
import { Form, Button} from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';
import{sessionProvider} from '../../Contextos/SessionContext';

export const Login = ({ signIn, status,signOut}) =>{


  {if (status === "init "){
    return(
    
    <Button onClick={signOut}> Salir </Button>
 
      
    )} 
  }

       return (
        
        <>   
 

  <Form className="loginContainer">
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label className="labelEmail">Email address</Form.Label>
    <Form.Control  className="email" type="email" placeholder="Enter email" required="required" />
    <Form.Text className="text-muted">
     Nunca Revelaremos sus datos  
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3  " controlId="formBasicPassword">
    <Form.Label  className="labelPassword">Password</Form.Label>
    <Form.Control className="password"  type="password" placeholder="Password"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" className="checkbox" label="Acepto Terminos y Condiciones"    />
  </Form.Group>
  <Button variant="primary" type="submit">
      
    Submit
  </Button>

 <div>

    {status === "restored" && <button className="googleLogin" onClick={signIn}><GoogleLogin/></button>}
    {status === "init" && console.log('sesion iniciada')}
    
 




  </div>

</Form>
    
     
         </>
       )};
  export default Login;