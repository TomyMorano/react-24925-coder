import { useState } from 'react'
import './ContactForm.css'
import Button from '../Buttton/Button'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='ContactContainer'>
          <h3>Contacto</h3>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Nombre:
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='number'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <Button className='Button' type='submit'>Confirmar</Button>
          </form>
        </div>
      )
}

export default ContactForm