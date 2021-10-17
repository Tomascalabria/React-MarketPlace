import React from 'react';
import {Card,Button} from 'react-bootstrap';
export const Item = ({ id, name, price, img, categoria }) => {

  return (
 
    <Card style={{ width: '18rem' }}>
 
      <Card.Img variant='top' src={img} />
 
      <Card.Body>
 
        <Card.Title>{name}</Card.Title>
 
        <Card.Text><span>$</span>{price}</Card.Text>
        <Card.Text className="categoria" >{categoria}</Card.Text>
        <Button variant='primary'>COMPRAR </Button>
 
      </Card.Body>
 
    </Card>
 
  );
 
 };
 
 
 
 