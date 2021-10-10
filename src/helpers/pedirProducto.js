import {stock} from '../data.js/stock'

export const pedirProductos =()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },2000)
    })

}
