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
            const alteredProduct = cart.filter(product=>product.id ===productToAdd.id)
    
                alteredProduct.map((product)=>(
                    product.quantity = product.quantity + quantity
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

    const getQuantityId = (id)=>{
        let contador= 0

        let filtrado = cart.filter(product => product.id === id)

        filtrado.forEach(product=>{
            contador += product.quantity
        })
        
        return contador
    }
    
    const getTotal = ()=>{
        let contador = 0
        cart.forEach(product=>{
            contador+= product.quantity * product.precio
        })
        return contador
    }

    const removeProduct=(id)=>{
        let newCart = cart.filter(product => product.id !== id)
        setCart([...newCart])
        return newCart
    }
    
    const isInCart =(id)=>{
        if (cart !==undefined){
            return cart.some(product=> product.id === id)
        }
    }

    const clearCart = ()=>{
        setCart([])
    }
    
    return(
        <CartContext.Provider value={{
            cart,
            addProduct,
            removeProduct,
            getQuantity,
            clearCart,
            getTotal,
            getQuantityId,
            isInCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext