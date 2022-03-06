import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase/firebase";
import { doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = ()=>{
    const [product,setProduct]= useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=>{
        const productDocReference = doc(firestoreDb,"products", productId)

        getDoc(productDocReference).then(querySnapshot=>{
            setProduct({id: querySnapshot.id, ...querySnapshot.data()})
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
            setLoading(false)
        })

        return(()=>{
            setProduct([])
        })
    },[productId])

    return(
        <div className="ItemDetailContainer">
            {loading || !product ? <h5>Cargando...</h5>
            :<ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer