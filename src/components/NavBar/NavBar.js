import Button from "../Buttton/Button"
import "./NavBar.css" 
import CartWidget from "../CartWidget/CartWidget"
const NavBar = ()=>{
    return(
        <nav>
            <div>
                <h2>Tienda React</h2>
            </div>
            <div>
                <Button>Pizza</Button>
                <Button>Ravioles</Button>
                <Button>Tarta</Button>
                <Button>Empanadas</Button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar