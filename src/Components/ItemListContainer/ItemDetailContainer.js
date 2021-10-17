import React, { useEffect } from "react";
import { pedirProductos } from "../../helpers/pedirProducto";

export const ItemDetailContainer =()=>{


    const [item, setItem]= userState(null)
    const [loader, setLoader]=useState(false)
    
    useEffect(()=>{
        setLoader(true)

        pedirProductos()
        .then(res=>{

        })
    },[])

    return(
        <div>
            {
                loader ? <h2> cargando....</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )

}