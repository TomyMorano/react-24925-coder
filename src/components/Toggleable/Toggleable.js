import { useState, useImperativeHandle, forwardRef } from 'react'
import Button from '../Buttton/Button'
const Toggleable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none'}

    const toggleVisibility = () => {
      setVisible(!visible)
    } 

    useImperativeHandle(ref, () => {
      return {
        toggleVisibility
      }
    })

    return (
      <div>
        <div style={hideWhenVisible}>
          <Button className='Button'  onClick={toggleVisibility}>{props.buttonLabelShow}</Button>
        </div>
        <div style={showWhenVisible}>
          <Button className='Button'  onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'Cancelar'}</Button>
          {props.children}
        </div>
      </div>
    ) 
})

export default Toggleable