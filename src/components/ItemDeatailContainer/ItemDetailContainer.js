import { getProduct } from "../../asyncMock";
import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = ()=>{
    const [product,setProduct]= useState()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getProduct().then(producto=>{
            setProduct(producto)
        }).catch(error=>{
            console.log(`algo salio mal ${error}`);
        }).finally(()=>{
            setLoading(false)
        })
        return(()=>{
            setProduct()
        })
    },[])
    return(
        <div className="ItemDetailContainer">
            {loading && !product ? ""
            :<ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer