import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import Button from "../Buttton/Button"
import CartContext from "../../context/CartContext"
import Error404 from "../404/404"
const ItemDetail = ({id,nombre,img,precio,detalles,stock,categoria})=>{
    const [quantity, setQuantity] = useState(0)

    const {addProduct, getQuantityId, isInCart}= useContext(CartContext)

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
        <>
        {nombre !== undefined ? 
            <div className="card cardCont">
                <div>
                    <img src={img} alt={`imagen producto ${nombre}`}/>
                </div>
                <div className="cardItems">
                    <h3>{nombre}</h3>
                    <p>{detalles}</p>
                    <h4>${precio}</h4>
                    {quantity<=0 ?
                    <>
                        <ItemCount stock={(stock - getQuantityId(id))} initial={1} onAdd={onAdd} />
                        <h3>Contamos con {(stock - getQuantityId(id))} unidades en stock {isInCart(id) && ` ,(Aparte de las ${getQuantityId(id)} unidades en el carrito).`}</h3>
                    </>
                    : <Link to={'/cart'}><Button>Terminar Compra</Button></Link>}
                </div>
            </div> 
            :<Error404/>}
        </>
    )
}

export default ItemDetail