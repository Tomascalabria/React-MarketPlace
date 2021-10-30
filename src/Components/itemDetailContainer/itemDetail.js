import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { CountItem } from '../CountItem/countItem'
import { CartContext } from '../../Contextos/CartContext.'




export const ItemDetail = ({ id, nombre, precio, img, descripcion, categoria,stock,} ) => {
    
    const {addToCart}=useContext(CartContext)

    const [cantidad,setCantidad]=useState(0)
    
    const {push} = useHistory()
    
    const handleAgregar = () => {
        const newItem = {
            id,
            nombre,
            precio,
            categoria,
            cantidad
        }

        addToCart(newItem)     
       
    }
 
 
    return (
        <div className="itemDetailContainer">
            <h1 className= "title" > {categoria} </h1>
            <h2 className="itemDetailName">{nombre}</h2>
            <img className="itemDetailImg" src={img} alt={nombre}/>
            <p className="itemDetailDesc">{descripcion}</p>
            <h4 className="itemDetailPrice">Precio: ${precio} </h4>
            
            <CountItem cantidad={cantidad} renderCantidad={setCantidad} stock={stock} />
            <button 
                className="btn btn-success"
                onClick={handleAgregar}
            >
                Agregar al carrito
            </button>
            

            <button className="btn btn-primary" onClick={() => push("/")}>
                Volver al inicio
            </button>
            
            
           
        </div>
        
    )}
