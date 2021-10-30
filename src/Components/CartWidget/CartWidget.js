import React, { useContext, useState } from 'react'
import { CartContext } from '../../Contextos/CartContext.';
import cartImg from '../../media/ShoppingCartIMG.png'



export const CartWidget =( )=>{
 
    const { calcularCantidad } = useContext(CartContext)

    return ( 
    <>
    <div className="cart-container">
        <img className="cartIcon" src={cartImg} alt="CartIcon" />
     <p>  {calcularCantidad()}    </p>   
   
            </div>


            
    </>
    );

}   
