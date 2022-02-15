import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({greeting,bg,c,ta,fs}) =>{
    return(
        <div style={{textAlign:ta}}>
            <h3 style={{backgroundColor:bg,color:c,fontSize:fs}}>{greeting}</h3>
            <ItemCount stock={11} initial={2}/>
        </div>
    )
}

export default ItemListContainer