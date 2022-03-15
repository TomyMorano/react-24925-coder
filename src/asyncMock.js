/*/*const products = [

    /*{id:1,nombre:"Teclado Mecánico Redragon Draconic K530",precio:6999,categoria:"Teclados",img:"/img/redragonDraconicK530.jpg",stock:12,detalles:`Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.

    Distinción a todo color:
    Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.
    
    Tecnología antighosting:
    Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.`},*/

    /*{id:2,nombre:"Teclado Mecánico Nisuta NSKBGZ61",precio:6799,categoria:"Teclados",img:"/img/NisutaNSKBGZ61.jpg",stock:4,detalles:`¡Teclado ideal para gamers profesionales! Este modelo de Nisuta se destaca por su valor económico en el mercado de teclados. Además, su ligereza y tamaño compacto lo vuelven un compañero único de juegos, fácil de transportar a cualquier lugar. A su vez, incluye doble entrada micro USB que permite conectividad con dispositivos compatibles.

    Distinción a todo color:
    Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.
    
    Tecnología antighosting:
    Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.`},*/
    
    /*{id:3,nombre:"Mouse Logitech G203 Lightsync lila",precio:2699,categoria:"Mouses",img:"/img/LogitechG203lila.jpg",stock:7,detalles:`Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.

    Adaptado a tus movimientos
    El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.
    
    La funcionalidad al alcance de tu mano
    El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.
    
    Rapidez y confiabilidad de los botones
    Con sus 6 botones podrás tener mayor control e independencia para ejecutar.
    
    Apto para fácil traslado
    Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.`},*/
    
    /*{id:4,nombre:"Auriculares Razer Kraken X Lite black",precio:5799,categoria:"Auriculares",img:"/img/RazerKrakenXLite.jpg",stock:3,detalles:`¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer X Lite no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.

    El formato perfecto para vos
    El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.`},*/

/*
const categories = [
    {id: 'Teclados', detalles: 'Teclados'},
    {id: 'Mouses', detalles: 'Mouses'},
    {id: 'Auriculares', detalles: 'Auriculares'}
]



const getProducts = (categoryId) => {
    if (categoryId) {
        return new Promise((resolve)=>{
            const filteredByCategory = products.filter(p=>p.categoria === categoryId)
            setTimeout(()=>{
                resolve(filteredByCategory)
            },2000)
        })
    }else{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        })
    }
}


export const getProduct = (id) =>{
    return new Promise((resolve)=>{
        const filteredProduct = products.find(p=> p.id === Number(id))
        setTimeout(()=>{
            resolve(filteredProduct)
        }, 2000)
    })
}

export const getCategory =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(categories)
        },1000)
    })
}
export default getProducts*/