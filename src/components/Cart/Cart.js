import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { useState, useContext, useRef } from 'react'
import CartContext from '../../context/CartContext'
import Button from '../Buttton/Button'
import { Link } from 'react-router-dom'
import {doc, getDoc, writeBatch, addDoc, collection,Timestamp} from 'firebase/firestore'
import {firestoreDb} from '../../services/firebase/firebase'
import { useToastNotificationServices } from '../../services/notificationToast/notificationToast'
import ContactForm from '../ContactForm/ContactForm'
import Toggleable from '../Toggleable/Toggleable'

const Cart = ()=>{

    const [processingOrder, setProcessingOrder] = useState(false)

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        address: "",
        comment: ""
    })

    const contactFormRef = useRef()

    const {cart, clearCart, getTotal, removeProduct}= useContext(CartContext)

    const setToastNotification = useToastNotificationServices()

    const confirmOrder = () =>{
        
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== ''){
            setProcessingOrder(true)
            const objOrder = {
                buyer:contact,
                items:cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }
        
            const batch = writeBatch(firestoreDb)
            const sinStock = []
        
            const checkOrder = () =>{
                if(sinStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                        batch.commit().then(() => {
                            clearCart()
                            setToastNotification('success', `La orden se genero exitosamente, su numero de orden es:  ${id}`,1500000)
                        })
                    }).catch(error => {
                        setToastNotification('error', error)
                    }).finally(() => {
                        setProcessingOrder(false)
                    })
                } else {
                    sinStock.forEach(prod => {
                        setToastNotification('error', `El producto ${prod.name} no tiene stock disponible`,8000)
                        removeProduct(prod.id)
                    })          
                }
            }
            objOrder.items.forEach(prod => {
                getDoc(doc(firestoreDb, 'products', prod.id)).then((response) => {
                    if(response.data().stock >= prod.quantity) {
                        batch.update(doc(firestoreDb, 'products', response.id), {
                            stock: response.data().stock - prod.quantity
                        })
                    } else {
                        sinStock.push({ id: response.id, ...response.data()})    
                    }
                }).catch((error)=>{
                    console.log(error);
                }).then(() => {
                    setProcessingOrder(false)
                    checkOrder()
                })

            })
            
        } else {
            setToastNotification('error','completa los datos de contacto para confirmar la orden', 5000)
        }
    }

    if(processingOrder) {
        return (
            <div className='buttonContainer'>
                <h1 >Se esta procesando su orden</h1>
            </div>
        )
    }

    if(cart.length === 0) {
        return (
            <div className='cartContainer'>
                <h2>No hay productos en el carrito</h2><Link to={'/'}><Button>Ver Productos</Button></Link>
            </div>
        )
    }

    return(
        <main className='cartContainer'>
            <h2>Carrito de Compras</h2>
            <hr></hr>

            {cart.map((productInCart=><CartItem key={productInCart.id} {...productInCart}/>))}
 
            <h3>Total=${getTotal()}</h3>
            <div className='buttonContainer'>
                <Button onClick={()=>{clearCart()}}>Borrar todos los Productos del Carrito</Button>
                <Button onClick={()=>{confirmOrder()}}>Confirmar Compra</Button>

                {
                    (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                    
                        <div>
                            <h4>Nombre: {contact.name}</h4>
                            <h4>Telefono: {contact.phone}</h4>
                            <h4>Direccion: {contact.address}</h4>
                            <h4>Comentario: {contact.comment}</h4>
                            
                            <Button onClick={() => setContact({ phone: '', address: '', comment: ''})}>
                                Borrar datos de contacto    
                            </Button>
                        </div>    
                }
                <Toggleable buttonLabelShow={
                            (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                                ? 'Editar contacto' 
                                : 'Agregar contacto'
                            } 
                            ref={contactFormRef}>
                    <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                </Toggleable>



            </div>
        </main>
    )
}

export default Cart