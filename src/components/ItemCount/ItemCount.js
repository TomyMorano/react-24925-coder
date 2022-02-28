import {useState} from 'react'
import Button from '../Buttton/Button'

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
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3>{contador}</h3>
            <div>
                <button onClick={()=>{add()}}>+</button>
                <button onClick={()=>{sub()}}>-</button>
            </div>
            <Button onClick={()=>{onAdd(contador)}}>Agregar al carrito</Button>
            
        </div>
    )
}

export default ItemCount