import "./ItemDetail.css" 
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({nombre,img,precio,detalles,stock})=>{

    return(
        <div className="card">
            <h3>{nombre}</h3>
            <img src={img} alt={`imagen producto ${nombre}`}/>
            <p>{detalles}</p>
            <h4>${precio}</h4>
            <ItemCount stock={stock} initial={1}/>
            <h3>Contamos con {stock} unidades en stock.</h3>
        </div>
    )
}

export default ItemDetail