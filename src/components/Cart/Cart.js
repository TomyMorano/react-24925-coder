import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import Button from '../Buttton/Button'
import { Link } from 'react-router-dom'
const Cart = ()=>{

    const {cart, getQuantity,clearCart,getTotal}= useContext(CartContext)

    return(
        <main className='cartContainer'>
            <h2>Carrito de Compras</h2>
            <hr></hr>
            {getQuantity() > 0 ? cart.map((productInCart)=>{
                return(
                    <CartItem key={productInCart.id} {...productInCart}/>
                )
            }): <><h2>No hay productos en el carrito</h2><Link to={'/'}><Button>Ver Productos</Button></Link></>}
            {getQuantity() > 0 && 
            <>
                <h2>Total=${getTotal()}</h2><Button onClick={()=>{clearCart()}}>Borrar todos los Productos del Carrito</Button>
            </>}
            
        </main>
    )
}

export default Cart