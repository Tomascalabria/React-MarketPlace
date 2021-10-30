
import { useContext } from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contextos/CartContext.';



export const Item = ({ id, nombre, precio, img, categoria }) => {
  const {addToCart} = useContext(CartContext)
  return (
  
    <Card style={{ width: '18rem' }}>
 
      <Card.Img variant='top' src={img} />
 
      <Card.Body>
 
        <Card.Title>{nombre}</Card.Title>
 
        <Card.Text><span>$</span>{precio}</Card.Text>
        <Card.Text className="categoria" >{categoria}</Card.Text>
        <Button className="btn btn-success" variant="btn"  >Agregar al Carrito  </Button>      
                <Link to={`/detail/${id}`}>
                    <Button variant="primary"onClick={() => addToCart(Item)} >Ver Producto </Button>
                </Link>

      </Card.Body>
 
    </Card>
 
  );
 
 };
 
 
 
 