import React, { useEffect,useState} from "react";
import { useParams } from "react-router";
import { pedirProductos } from "../../helpers/pedirProducto";
import { ItemDetail } from "./itemDetail";


export const ItemDetailContainer =()=>{
    
    const [item, setItem]=useState([])
    const [loader, setLoader]=useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoader(true)

        pedirProductos()
            .then( res => {
                setItem( res.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=> {
                setLoader(false)
            })

    }, [itemId])

    return(
        <div className="container">
            {
                loader ? <h2> cargando....</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )

}