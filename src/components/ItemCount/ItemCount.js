import {useState} from 'react'
import Button from '../Buttton/Button'
import './ItemCount.css'
const ItemCount = ({stock=5,initial=0, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const add = ()=>{
        if (contador < stock){
            setContador(contador + 1)
        }        
    }
    const sub = ()=>{
        if (contador > 0){
            setContador(contador - 1)
        }
    }
    //const addCart = ()=>{
    //    if (contador > 0) {
    //        console.log(`se agregaron ${contador} productos al carrito`)    
    //    }
    //}

    return(
        <div className='itemCount'>
            <div className='itemCountDiv'>
                <button onClick={()=>{add()}}>+</button>
                <h3>{contador}</h3> 
                <button onClick={()=>{sub()}}>-</button>
            </div>
            <div className='btnCounter'>
                <Button onClick={()=>{onAdd(contador)}}>Agregar al carrito</Button>
            </div>
            
            
        </div>
    )
}

export default ItemCount