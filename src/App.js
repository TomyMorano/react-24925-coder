import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDeatailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NotificationServicesProvider } from './services/notificationToast/notificationToast';
import Error404 from './components/Error404/404';

function App() {
  return (
    <div className='App'>
      	<NotificationServicesProvider>
        	<CartContextProvider>
          		<BrowserRouter>
            		<NavBar/>
            			<Routes>
              				<Route path='/' element={<ItemListContainer/>}/>
              				<Route path='category/:categoryId' element={<ItemListContainer/>}/>
              				<Route path='product/:productId' element={<ItemDetailContainer/>}/>
              				<Route path='/cart' element={<Cart/>}/>
              				<Route path='/*' element={<Error404/>}/>
            			</Routes>
          		</BrowserRouter>
        	</CartContextProvider>
      	</NotificationServicesProvider>
    </div>
  );
}

export default App;
