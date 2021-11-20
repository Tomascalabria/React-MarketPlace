import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import { LoginContainer } from '../loginContainer/loginContainer';


export const NavBar =({titulo,Series,Peliculas,Contacto})=> {

    return(
        <>
        <section className="navbar-container">
           <div className="navbar"> 
           
             <NavLink to ="/"> <h3>{titulo}</h3> </NavLink>
            </div>

            <NavLink activeClassName="active-link"  exact to="/Productos/Series">{Series} </NavLink>
            <NavLink activeClassName="active-link" exact to="/Productos/Peliculas" >{Peliculas} </NavLink>
            <NavLink activeClassName="active-link" to="/Contacto">{Contacto} </NavLink>
            <Link to="/cart">  <CartWidget /> </Link>
            <Link to="/login"> <LoginContainer/></Link>
        </section>
        
    </>
    )


}