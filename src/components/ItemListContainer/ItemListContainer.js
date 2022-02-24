import ItemList from "../ItemList/ItemList"
import { useState,useEffect } from "react"
import getProducts from "../../asyncMock"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        getProducts(categoryId).then(producto => {
            setProducts(producto)
        }).catch(error =>{
            console.log(`algo salio mal ${error}`);
        }).finally(()=>{
            setLoading(false)
        })
        return(()=>{
            setProducts()
        })
    }, [categoryId])

    return(
        <div className="ItemListContainer">
            {loading ? <h5>Cargando...</h5>
            : <ItemList productos={products}/>}
        </div>
    )
}

export default ItemListContainer