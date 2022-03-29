import { Link } from "react-router-dom"
import "./404.css" 
const   Error404 =()=>{
    return(

        <div className="Container404">
            <h5>Página o Producto no encontrado... puedes intentar volver al <Link to={'/'}>Inicio</Link>.</h5>
        </div>

    )
}

export default Error404