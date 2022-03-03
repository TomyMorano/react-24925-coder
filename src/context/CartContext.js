import { createContext, useState } from "react"

const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addProduct=(productToAdd,quantity)=>{
        
        const newProduct={
            ...productToAdd,
            quantity
        }
        
        if(isInCart(productToAdd.id)){
            const alteredProduct = cart.filter(p=>p.id ===productToAdd.id)
    
                alteredProduct.map((p)=>(
                    p.quantity = p.quantity + quantity
                ))
    
            setCart([...removeProduct(productToAdd.id),...alteredProduct])
        }else if(!isInCart(productToAdd)){
            setCart([...cart,newProduct])
        }

    }
    
    const getQuantity = ()=>{
        let contador= 0
        cart.forEach(product=>{
            contador += product.quantity
        })
        
        return contador
    }
    
    const getTotal = ()=>{
        let contador = 0
        cart.forEach(p=>{
            contador+= p.quantity *p.precio
        })
        return contador
    }

    const removeProduct=(id)=>{
        let newCart = cart.filter(p=>p.id !== id)
        setCart([...newCart])
        return newCart
    }
    
    const isInCart =(id)=>{
        if (cart !==undefined){
            return cart.some(p=> p.id === id)
        }
    }

    const clearCart = ()=>{
        setCart([])
    }
    console.log(cart);
    

    return(
        <CartContext.Provider value={{
            cart,
            addProduct,
            removeProduct,
            getQuantity,
            clearCart,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext