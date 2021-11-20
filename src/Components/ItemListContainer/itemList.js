import React, { useContext } from "react";

import { Item } from "./item";


export const  ItemList = ({ items=[]})=>{

    return(
        <>
     <div className="container">
         <h2> Nuestros Productos </h2>
        </div>
        <div className="row">
            {items.map((item)=><Item {...item} key={item.id}  />)}

        </div>
        </>

        
    )


}