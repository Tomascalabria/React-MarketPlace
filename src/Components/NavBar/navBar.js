import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar =({titulo,producto1,producto2,producto3})=> {
    return(
        <>
        <section className="navbar-container">
           <div className="navbar"> 
           
            <h3>{titulo}</h3>
            </div>
             <p className="producto">{producto1}</p>
             <p className="producto">{producto2}</p>
             <p className="producto">{producto3}</p>
            
            
             <CartWidget/>
        </section>
  
    </>
    )


}