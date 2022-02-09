
const ItemListContainer = ({greeting,bg,c,ta,fs}) =>{
    return(
        <div style={{textAlign:ta}}>
            <h3 style={{backgroundColor:bg,color:c,fontSize:fs}}>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer