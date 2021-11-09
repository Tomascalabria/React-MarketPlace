import { ItemListContainer } from "./Components/ItemListContainer/itemListContainer";
import { NavBar } from "./Components/NavBar/navBar";
import {BrowserRouter,Route,Switch,Redirect, HashRouter} from "react-router-dom";

import {ItemDetailContainer} from "../src/Components/itemDetailContainer/ItemDetailContainer"
import { Login } from "./Components/loginContainer/login";
import { CartProvider } from "./Contextos/CartContext.";
import { CartScreen } from "./Components/CartScreen/CartScreen";
import {Provider as SessionProvider} from "./Contextos/SessionContext";




function App() {

  return (
    <>
 

    <CartProvider>
    <HashRouter>
    <NavBar titulo= "TimBurton Shop" Series="Series" Peliculas="Peliculas" Contacto="Contacto"/>
    
    
    <Switch> 
    <Route exact path="/">
      <h3> INICIO </h3>
      <ItemListContainer />
    </Route>  
    <Route exact path="/Productos/:categoriaId">
    <ItemListContainer/>

    </Route>  
    <Route exact path="/contacto">
      <h3 > Contacto </h3>
    </Route>  
    
    </Switch>
    <Route path="*">
      <Redirect to="/">  </Redirect>
      </Route>
      
      <Route exact path="/cart">
       <CartScreen/>
      </Route>
      
      <Route exact path="/detail/:itemId">
        <ItemDetailContainer />
      </Route>
    
     <Route exact path="/login">
        <Login/>
      </Route> 

   
    </HashRouter>
    </CartProvider>

    </>
    
  );
}

export default App;
