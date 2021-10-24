import React from 'react'
import { useHistory } from 'react-router'
import { useState } from 'react'
import { CountItem } from '../CountItem/countItem'




export const ItemDetail = ({ id, nombre, precio, img, descripcion, categoria,stock} ) => {
    
    
    const [cantidad,setCantidad]=useState(0)

    const addToCart = ()=>{
        const newItem ={
        id,
        nombre,
        precio,
        cantidad,
        categoria
        }
    console.log(newItem)        
    }

    return (
        <div className="itemDetailContainer">
            <h1 className= "title" > {categoria} </h1>
            <h2 className="itemDetailName">{nombre}</h2>
            <img className="itemDetailImg" src={img} alt={nombre}/>
            <p className="itemDetailDesc">{descripcion}</p>
            <h4 className="itemDetailPrice">Precio: ${precio}</h4>
            
            <CountItem cantidad={cantidad} renderCantidad={setCantidad} stock={stock} />
            
           
        </div>
        
    )}
