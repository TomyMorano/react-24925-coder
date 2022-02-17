import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { useState,useEffect } from "react"
import getProducts from "../../asyncMock"
import "./ItemListContainer.css"

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getProducts().then(producto => {
            setProducts(producto)
        }).catch(error =>{
            console.log(`algo salio mal ${error}`);
        }).finally(()=>{
            setLoading(false)
        })
        return(()=>{
            setProducts()
        })
    }, [])

    return(
        <div className="ItemListContainer">
            {loading ? <h5>Cargando...</h5>
            : <ItemList productos={products}/>}
            <ItemCount stock={11} initial={2}/>
        </div>
    )
}

export default ItemListContainer