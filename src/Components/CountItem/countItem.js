import React from 'react'

export const CountItem = ({cantidad,renderCantidad,stock}) => {
    const handleSumar=()=>{
        if( cantidad<stock ){ 
        renderCantidad(cantidad+1)
        
        }
        

    }
    const handleRestar=()=>{
        if( cantidad>0){ 
            renderCantidad(cantidad-1)
            
            }
             
    }
    

    return (
        <div className="counter">
        
            <button 
                className="btn btn+"
                onClick={handleSumar}
            >
                +
            </button>
              <p> <span> Cantidad:</span> {cantidad }    </p>   
              <button 
                className="btn btn-"
                onClick={handleRestar}
            >
               -
            </button>
        </div>
    )
}
