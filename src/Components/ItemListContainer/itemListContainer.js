import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"

import { pedirProductos } from "../../helpers/pedirProducto"
import { ItemList } from "./itemList"
import { getFirestore } from "../../Firebase/config"



export const ItemListContainer= ()=>{
const [items, setItems]=useState([])
const [loader, setLoader]=useState(false)
const {categoriaId}= useParams();


useEffect(()=>{
    setLoader(true)

    const db = getFirestore()
    const productos = categoriaId 
                        ? db.collection('Stock').where('categoria', '==', categoriaId)
                        : db.collection('Stock')

    productos.get()
        .then((response) => {
            const newItems = response.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })

            setItems(newItems)
        })
        .catch( err => console.log(err))
        .finally(() => {
            setLoader(false)}
        )
    
}, [categoriaId, setLoader])

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