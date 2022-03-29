import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({productos}) =>{
    return(
        <div className="cardContainer">
            {!productos ? <h5>Cargando...</h5>:productos.map((producto) =>(
                <Item {...producto} key={producto.id}/>
            )) }
        </div>
    )
}

export default ItemList