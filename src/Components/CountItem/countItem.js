import React from 'react'
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router'
import { stock } from '../../data.js/stock';
export const CountItem = ({cantidad,renderCantidad,stock}) => {
    const handleCompra=()=>{
        if( cantidad<stock){ 
        renderCantidad(cantidad+1)
        
        }


    }
    const {goBack, push} = useHistory()

    return (
        <div className="counter">
              <p> <span> Cantidad:</span> {cantidad }    </p>   
              <button 
                className="btn btn-success"
                onClick={handleCompra}
            >
                Agregar al carrito
            </button>
            <button 
                className="btn btn-primary"
                onClick={() => goBack()}
            >
                Volver
            </button>

            <button className="btn btn-primary" onClick={() => push("/")}>
                Volver al inicio
            </button>
        </div>
    )
}
