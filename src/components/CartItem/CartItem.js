import './CartItem.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import Button from "../Buttton/Button"
const CartItem = ({nombre,img,precio,id,detalles,quantity}) =>{
    
    const {removeProduct} = useContext(CartContext)

    return(
        <article className='cartItem'>
            <div className="cartCard">
                <img src={img} alt={`imagen de ${nombre}`}/>
                <div>
                    <h3>{nombre}</h3>
                </div>
                <h3>Cantidad:{quantity}</h3>
                <h3>${precio}</h3>
                <Button onClick={()=>{removeProduct(id)}}>X</Button>
            </div>
            <div className='cartItemHr'>
                <hr ></hr>     
            </div>
               
        </article>

    )
}



export default CartItem