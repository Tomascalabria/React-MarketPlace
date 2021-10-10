import { ItemListContainer } from "./Components/ItemListContainer/itemListContainer";
import { NavBar } from "./Components/NavBar/navBar";

function App() {
  return (
    <>
    <NavBar titulo= "TimBurton Shop" producto1="Personajes" producto2="Peliculas"producto3="Indumentaria"/>
   
    <ItemListContainer/>
    </>
  );
}

export default App;

