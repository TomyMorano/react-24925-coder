import "./CartWidget.css"
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useContext, } from "react";

const CartWidget =()=>{
    const {getQuantity,cart }= useContext(CartContext)

    
    return(
        <div>

            {cart.length > 0 &&<Link to={'/cart'}  className="cart"><BsFillCartFill/><h4>{getQuantity()}</h4></Link>}

        </div>
        
        
    )
}

export default CartWidget