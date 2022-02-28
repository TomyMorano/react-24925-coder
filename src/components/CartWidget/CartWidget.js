import "./CartWidget.css"
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget =()=>{
    return(
        <Link to={'/cart'}  className="cart"><BsFillCartFill/></Link>
        
    )
}

export default CartWidget