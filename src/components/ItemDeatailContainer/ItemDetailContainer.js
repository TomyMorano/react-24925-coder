import { getProduct } from "../../asyncMock";
import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [product,setProduct]= useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=>{
        getProduct(productId).then(productoFiltrado=>{
            setProduct(productoFiltrado)
        }).catch(error=>{
            console.log(`algo salio mal ${error}`);
        }).finally(()=>{
            setLoading(false)
        })
        
        return(()=>{
            setProduct()
        })
    },[productId])

    return(
        <div className="ItemDetailContainer">
            {loading && !product ? <h5>Cargando...</h5>
            :<ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer