import React, { useContext, Component,useState } from 'react'
import {Button, Offcanvas} from 'react-bootstrap';
import { Link,NavLink} from 'react-router-dom'
import { CartContext } from '../../Contextos/CartContext.'  
import { Checkout } from '../Checkout/Checkout';


export const CartScreen = () => {

    const {carrito,costoTotal,removerItem} = useContext(CartContext)
    
   


    {   if (carrito.length === 0){
        return( 
      <div className="carritoVacio">
      <h2 > su carrito esta vacio </h2>

            <Link to={`./`}> <Button className="btn-primary btn" > Vamo´a compra  </Button> </Link>
      </div>
        )

 
    }     
    
    else{  
        
    return (

  
        <div className="screenContainer"> 
            <h3 className="title" > Resumen de Compra<span>.</span><span>.</span><span>.</span> </h3>  
            
            <div className="cartProductContainer">
            <div className="ProdCategoria">
            <p>  Producto   </p>
            <p>  Cantidad     </p>
            <p >Precio X unidad   </p>
              </div>
            {
                carrito.map( (prod) => (
                    
                    <div className="cartProductsList">

                    <img alt="productImg" className="productImg" src={prod.img}></img>
                    <div className="ProdItem">
                    
                    <p>  {prod.nombre} </p>
                    </div>
                    <div className="prodItem">
                    
                    <p>  {prod.cantidad}  </p>
                    </div>
                    <div className="ProdItem">
                    <p> $ {prod.precio}    </p>
                    </div>
                    <div className="ProdItem" >
                    <button className="button" onClick={() => removerItem(prod.id)}> X </button>
                    </div>
                    </div>
                )
               
            )}
                
                <div className="cartTotal">
                <p className="cartTotalTitle">  TOTAL     </p> 
                <p>  $ {costoTotal()}   </p> 
                
        </div>  
     
         
        </div>   
        <NavLink activeClassName="checkoutActive"  to ={"/Checkout"}> <Button className="btn-primary"> Comprar  </Button></NavLink>
        </div>
    
   
    

    )}
                }
                }
            
export default CartScreen