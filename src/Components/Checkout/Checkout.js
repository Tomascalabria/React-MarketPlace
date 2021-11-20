import React,{useContext} from 'react'
import { Form,Row,FormGroup,FormLabel,FormCheck,FormControl,Col,Button, NavLink } from 'react-bootstrap'
import { CartContext } from '../../Contextos/CartContext.'
import Swal from 'sweetalert2'


export const Checkout = () => {

  const{ carrito,costoTotal,vaciarCarrito}=useContext(CartContext)
  const alert=(e)=>{{
    e.preventDefault()
    Swal.fire({
      title: 'Felicitaciones!',
      text: 'N° de orden 121442422',
      icon: 'success',
      confirmButtonText: 'Cool'
      
    
    })
    if(carrito.length==0){
      vaciarCarrito()
    }
  }
}
  
  return (

    
  
    <div className="Container">
    <div className="formContainer">
      
  <h4>Datos de pago</h4>
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Nombre Completo </Form.Label>
      <Form.Control type="text" placeholder="Nombre Completo" />
    </Form.Group>
  

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>


    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>DNI</Form.Label>
      <Form.Control type="Number" placeholder="DNI" />
    </Form.Group>
  </Row>

  <Form.Group as ={Row} controlId="formGridAddress1">
    <Form.Label>Direccion</Form.Label>
    <Form.Control placeholder="Direccion" />
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Ciudad</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Provincia</Form.Label>
      <Form.Select defaultValue="Provincia...">
        <option>Choose...</option>
        <option>...</option>
        <option>Bs As</option>
        <option>Ciudad Autonoma de Buenos Aires</option>
        <option> La Pampa </option>
        <option> Entre Rios </option>
        <option> Santa Fe  </option>
        <option> Corrientes </option>
        <option>Chaco  </option>
        <option> Neuquen </option>
        <option> Tucuman </option>
        <option> Formosa  </option>
        <option> Misiones </option>
        <option>San Juan  </option>
        <option> Catamarca </option>
        <option>  Stgo del Estero</option>
        <option> La Rioja</option>
        <option> Jujuy </option>
        <option> Salta </option>
        <option> Cordoba </option>
        <option>  San Luis</option>
        <option> Mendoza </option>
        <option> Rio Negro </option>
        <option>Chubut   </option>
        <option> Santa Cruz </option>
        <option> Tierra del Fuego  </option>




        
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>CP</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
<Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Numero de Tarjeta</Form.Label>
      <Form.Control type="number" placeholder="N° tarjeta"  maxLength="19" placeholder="xxxx xxxx xxxx xxxx" />
    </Form.Group>
    <Form.Group as={Row} controlId="formGridEmail">
      <Form.Label>cvv </Form.Label>
      <Form.Control type="tel " typeof  placeholder="CVV"   maxLength={3 } />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Fecha de vencimiento</Form.Label>
      <Form.Control type="tel" placeholder="MM/YY"  maxLength={5 }/>
    </Form.Group>
    </Row>
  <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="btnComprar" onClick={alert}  type="submit">
    Comprar
  </Button>
  </Form>
  </div> 
  <div className="checkoutDetail">
    <h4>Detalle de compra </h4>

  {   carrito.map( (prod) => (
                    
                    <div className="CheckoutList">
                    <div className="ProdItem">
                    <p className="producto"> Producto </p>
                    <p className="nombre">  {prod.nombre} </p>
                    </div>
                    <div className="prodItem">
                    
                    <p className="cantidad"><span className="span">  Cantidad</span>  {prod.cantidad}  </p>
                    </div>
                    <div className="ProdItem">
                    <p className="precio" ><span>  Precio </span>  $ {prod.precio}    </p>
                    </div>
                    <div className="ProdItem" >
             
                    </div>
                
                    </div>
                )
               
    )
    
  }
      <div className="checkoutTotal">
                <p className="cartTotalTitle">  TOTAL     </p> 
                <p>  $ {costoTotal()}   </p> 
                </div>
  </div>
     
     

</div>


  )
 
}
  
