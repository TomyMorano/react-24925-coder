import "./ItemDetail.css" 

const ItemDetail = ({nombre,img,precio,detalles})=>{

    return(
        <div className="card">
            <h3>{nombre}</h3>
            <img src={img} alt={`imagen producto ${nombre}`}/>
            <p>{detalles}</p>
            <h5>${precio}</h5>
        </div>
    )
}

export default ItemDetail