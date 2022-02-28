import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Buttton/Button"


const ItemDetail = ({nombre,img,precio,detalles,stock})=>{
    const [quantity, setQuantity] = useState(0)

    const onAdd = (quantityToAdd)=>{
        setQuantity(quantityToAdd)     
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