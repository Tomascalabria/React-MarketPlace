import React from 'react';
import {Card,Button} from 'react-bootstrap';
export const Item= (id,name,price,img,)=>{

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button variant="primary">Comprar </Button>
        </Card.Body>
      </Card>
        

    )
    

}