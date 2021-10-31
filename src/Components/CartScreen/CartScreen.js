import React, { useContext,  } from 'react'
import { CartContext } from '../../Contextos/CartContext.'

export const CartScreen = () => {

    const {carrito,costoTotal,removerItem} = useContext(CartContext)
 
    

    return (
        
        <div className="screenContainer"> 
            <h3 className="title" > Resumen de Compra<span>.</span><span>.</span><span>.</span> </h3>  
            
            <div className="cartProductContainer">
            <div className="ProdCategoria">
            <p className="none"> </p >
            <p>  Producto   </p>
            <p>  Cantidad     </p>
            <p >Precio X unidad   </p>
            <p>                      </p>
                             </div>
            {
                carrito.map( (prod) => (
                    
                    <div className="cartProductsList">
                    
                    <img alt="productImg" className="productImg" src={prod.img}></img>
                    <div className="ProdItem">
                    <p className="categoria">                 </p>
                    <p>  {prod.nombre} </p>
                    </div>
                    <div className="prodItem">
                    <p className="categoria">                 </p>
                    <p>  {prod.cantidad}  </p>
                    </div>
                    <div className="ProdItem">
                    <p  className="categoria">        </p>
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
