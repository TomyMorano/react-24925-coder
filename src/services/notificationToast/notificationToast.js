import { useState, createContext, useContext } from "react"


const ToastNotification = ({message, severity, timer}) => {


    const toastStyles = {
        position: 'absolute',
        top: 100,
        right: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success' ? 'green' : 'red',
        padding: '10px 20px 10px 20px',
        color: 'white',
        borderRadius: '10px'
    }

    if(message === '') {
        return null
    }

    return (
        <div style={{...toastStyles}}>
            {message}
        </div>
    )

}

const NotificationToastContext = createContext()

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')


    const setToastNotification = (severity, message, timer) => {

        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        },timer)
    }


    return (
        <NotificationToastContext.Provider value={setToastNotification}>
            <ToastNotification message={message} severity={severity}/>
            {children}
        </NotificationToastContext.Provider>
    )
}

export const useToastNotificationServices = () => {
    return useContext(NotificationToastContext)
}
