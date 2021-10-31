import   { createContext,useState,useEffect} from 'react'


export const    CartContext = createContext()


const init = JSON.parse(sessionStorage.getItem('carrito'))||[]
export const CartProvider =({children})=>{


    const [carrito, setCarrito]=useState(init)

    const addToCart = (item) => {
    
      setCarrito( [...carrito, item] )
    
    }
    
    const calcularCantidad = () => {
      return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0 )
    }
      const removerItem  = (itemId) => {
        const newCart = carrito.filter( (prod) => prod.id !== itemId)
        setCarrito( newCart )
      }
      const costoTotal = () => {
        return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.precio, 0)
      }
    
    useEffect(()=>{
      sessionStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])
    
       
    return( 
    <CartContext.Provider value={{
        addToCart,
        calcularCantidad,
        removerItem,
        carrito,
        costoTotal
    }}>
    
    {children}
    
    </CartContext.Provider>

);
}

