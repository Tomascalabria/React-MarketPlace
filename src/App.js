import { ItemListContainer } from "./Components/ItemListContainer/itemListContainer";
import { NavBar } from "./Components/NavBar/navBar";
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import {ItemDetailContainer} from "../src/Components/itemDetailContainer/ItemDetailContainer"
  

function App() {
  return (
    <>

    <BrowserRouter>
    <NavBar titulo= "TimBurton Shop" Personajes="Personajes" Peliculas="Peliculas" Contacto="Contacto"/>
    
    
    <Switch> 
    <Route exact path="/">
      <h3> INICIO </h3>
      <ItemListContainer/>
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
       <h3> PROXIMAMENTE </h3>
      </Route>
      
      <Route exact path="/detail/:itemId">
        <ItemDetailContainer/>
      </Route>
    </BrowserRouter>
    </>
  );
}

export default App;

