import React from 'react'
import { useHistory } from 'react-router'




export const ItemDetail = ({ id, nombre, precio, img, descripcion, categoria} ) => {

    const {goBack, push} = useHistory()


    return (
        <div className="itemDetailContainer">

            <h2 className="itemDetailName">{nombre}</h2>
            <img className="itemDetailImg" src={img} alt={nombre}/>
            <p className="itemDetailDesc">{descripcion}</p>
            <h4 className="itemDetailPrice">Precio: ${precio}</h4>
            

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
        
    )}
