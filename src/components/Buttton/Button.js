import "./Button.css" 

const Button = ({children})=>{
    return(
        <button> 
            <span>{children}</span> 
        </button>
    )
}   

export default Button