import React, { useEffect,useState} from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./itemDetail";
import { getFirestore } from "../../Firebase/config";

export const ItemDetailContainer =()=>{
    
    const [item, setItem]=useState([])
    const [loader, setLoader]=useState(false)
    const {itemId } = useParams()

    useEffect(()=>{
        setLoader(true)
        const db = getFirestore()
        const productos = db.collection('Stock')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoader(false)
            })

    }, [itemId, setLoader])


    return(
        <div className="container">
            {
                loader ? <h2> cargando....</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )

}