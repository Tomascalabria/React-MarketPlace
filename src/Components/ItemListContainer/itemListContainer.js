import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"

import { pedirProductos } from "../../helpers/pedirProducto"
import { ItemList } from "./itemList"




export const ItemListContainer= ()=>{
const [items, setItems]=useState([])
const [loader, setLoader]=useState(false)
const {categoriaId}= useParams();



    useEffect(()=>{
        setLoader(true)

        pedirProductos()
        .then((res)=>{
          
            if (categoriaId){
                setItems(res.filter(prod=>prod.categoria=== categoriaId))
            }
            else{
                setItems(res)
            }
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoader(false)
            console.log('fin del llamado')
        })
        
    },[categoriaId])

    return (
        <>
            <section className="itemListContainer">
                {
                loader
                ?<h2 > Cargando...</h2>
                : <ItemList   items={items} />
            }
     
        </section>
        </>
        
    )
}