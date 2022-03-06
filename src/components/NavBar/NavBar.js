import Button from "../Buttton/Button"
import "./NavBar.css" 
import CartWidget from "../CartWidget/CartWidget"
import { NavLink,Link } from "react-router-dom"
import { useEffect,useState } from "react"
import { collection,getDocs } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/firebase"
const NavBar = ()=>{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const collectionReference = collection(firestoreDb,'categories')

        getDocs(collectionReference).then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log("Sin resultados");
            }
            const categories=querySnapshot.docs.map((categorie)=>{
                return {id:categorie.id,...categorie.data()}
            })

            setCategories(categories)
        })

      }, [])

    return(
        <>
        <nav className="nav">
            <div>
                <Link to={'/'}><h2>Tienda React</h2></Link> 
            </div>
            <div className="categoriesNav">
                {categories.map(cat => <NavLink key={cat.id} 
                to={`/category/${cat.id}`} 
                className={({ isActive }) =>
                isActive ? 'ActiveNav' : 'navBtn'}
                ><Button>{cat.detalles}</Button></NavLink>)}
            </div>
            <CartWidget/>
        </nav>
        <hr className="hr"></hr>
        </>
    )
}

export default NavBar