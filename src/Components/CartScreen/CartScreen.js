import React, { useContext,  } from 'react'
import { CartContext } from '../../Contextos/CartContext.'

export const CartScreen = () => {

    const {carrito,costoTotal,removerItem} = useContext(CartContext)
 
    

    return (
        
        <div className="screenContainer"> 
            <h3 className="title" > Resumen de Compra<span>.</span><span>.</span><span>.</span> </h3>  
            
            <div className="cartProductContainer">
                
            {
                carrito.map( (prod) => (
                    
                    <div className="cartProductsList">
                    
                    <img alt="productImg" className="productImg" src={(prod.img)}></img>
                    <div className="ProdItem">
                    <p className="categoria">  Producto               </p>
                    <p>  {prod.nombre} </p>
                    </div>
                    <div className="prodItem">
                    <p className="categoria">  Cantidad               </p>
                    <p>  {prod.cantidad}  </p>
                    </div>
                    <div className="ProdItem">
                    <p  className="categoria">  Precio X unidad       </p>
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
        </div>
    

    
    
    )

}
