import ItemList from "../ItemList/ItemList"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import "./ItemListContainer.css"
import { firestoreDb } from "../../services/firebase/firebase"


const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
    
        const collectionReference = categoryId ? query(collection(firestoreDb,'products'), where('categoria', '==', categoryId ))
        : collection(firestoreDb,'products')


        getDocs(collectionReference).then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log("Sin resultados");
            }
            const products = querySnapshot.docs.map((doc)=>{
                return {id: doc.id, ...doc.data()}
            })

            setProducts(products)
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            setLoading(false)
        })

        return(()=>{
            setProducts([])
        })

    }, [categoryId])

    return(
        <div className="ItemListContainer">
            {loading || !products ?<h5>Cargando...</h5>
            : <ItemList productos={products}/>}
        </div>
    )
}

export default ItemListContainer