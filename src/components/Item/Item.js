import "./Item.css" 
import { Link } from "react-router-dom"

const Item = ({nombre,precio,img,id}) =>{
    
    return(
        <div className="card">
            <h3>{nombre}</h3>
            <img src={img} alt={`imagen producto ${nombre}`}/>
            <h3>${precio}</h3>
            <Link className="btn" to={`/product/${id}`}><span>Ver más</span></Link>
        </div>
    )
}

export default Item