import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import Button from "../Buttton/Button"
import CartContext from "../../context/CartContext"

const ItemDetail = ({id,nombre,img,precio,detalles,stock,categoria})=>{
    const [quantity, setQuantity] = useState(0)

    const {addProduct}= useContext(CartContext)

    const onAdd = (quantityToAdd)=>{
        setQuantity(quantityToAdd)
        
        const productToAdd={
            nombre,
            id,
            img,
            precio,
            detalles,
            stock,
            categoria,
        }
    
        addProduct(productToAdd,quantityToAdd)
    }
   
    return(
        <div className="card">
            <h3>{nombre}</h3>
            <img src={img} alt={`imagen producto ${nombre}`}/>
            <p>{detalles}</p>
            <h4>${precio}</h4>
            {quantity<=0 ?
            <>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                <h3>Contamos con {stock} unidades en stock.</h3>
            </>
            : <Link to={'/cart'}><Button>Terminar Compra</Button></Link>}

            
        </div>
    )
}

export default ItemDetail