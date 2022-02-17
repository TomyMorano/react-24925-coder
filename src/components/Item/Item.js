import "./Item.css" 

const Item = ({nombre,precio,img}) =>{
    
    return(
        <div className="card">
            <h3>{nombre}</h3>
            <img src={img} alt={`imagen producto ${nombre}`}/>
            <p>${precio}</p>
        </div>
    )
}

export default Item