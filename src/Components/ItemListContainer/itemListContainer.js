import { useEffect, useState } from "react"
import { pedirProductos } from "../../helpers/pedirProducto"
import { Item } from "./item"
import { ItemList } from "./itemList"

export const ItemListContainer= ()=>{
const [items, setItems]=useState([])
const [loader, setLoader]=useState(false)

    useEffect(()=>{
        setLoader(true)

        pedirProductos()
        .then((res)=>{
            setItems(res)
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoader(false)
            console.log('fin del llamado')
        })
        
    },[])

    return (
        <>
        <section className="itemListContainer">
            {
                loader
                ?<h2> cargando...</h2>
                : <ItemList items={items} />
            }
     
        </section>
        </>
        
    )
}