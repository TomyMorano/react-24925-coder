import Button from "../Buttton/Button"
import "./NavBar.css" 
import CartWidget from "../CartWidget/CartWidget"
import { NavLink,Link } from "react-router-dom"
import { useEffect,useState } from "react"
import { getCategory } from "../../asyncMock"
const NavBar = ()=>{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategory().then(categories => {
          setCategories(categories)
        })
      }, [])

    return(
        <nav className="nav">
            <div>
                <Link to={'/'}><h2>Tienda React</h2></Link> 
            </div>
            <div className="categoriesNav">
                {categories.map(cat => <NavLink key={cat.id} 
                to={`/category/${cat.id}`} 
                className={({ isActive }) =>
                isActive ? 'ActiveNav' : 'nav'}
                ><Button>{cat.detalles}</Button></NavLink>)}
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar