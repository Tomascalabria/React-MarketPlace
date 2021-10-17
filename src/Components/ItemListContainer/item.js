import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Item = ({ id, nombre, precio, img, categoria }) => {

  return (
 
    <Card style={{ width: '18rem' }}>
 
      <Card.Img variant='top' src={img} />
 
      <Card.Body>
 
        <Card.Title>{nombre}</Card.Title>
 
        <Card.Text><span>$</span>{precio}</Card.Text>
        <Card.Text className="categoria" >{categoria}</Card.Text>
        <Button  variant="primary">Comprar  </Button>
                <Link to={`/detail/${id}`}>
                    <Button  variant="primary">Ver Producto </Button>
                </Link>

      </Card.Body>
 
    </Card>
 
  );
 
 };
 
 
 
 