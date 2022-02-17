import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({productos}) =>{
    console.log(productos);
    return(
        <div className="cardContainer">
            {productos.map((producto) =>(
                <Item {...producto} key={producto.id}/>
            ))}
        </div>
    )
}


export default ItemList