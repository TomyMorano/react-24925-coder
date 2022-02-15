import "./Button.css" 

const Button = ({children,onClick})=>{
    return(
        <button onClick={onClick}> 
            <span>{children}</span> 
        </button>
    )
}   

export default Button