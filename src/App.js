import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting="Buenas tutor!" bg="cornflowerblue" c="white" ta="center" fs="3rem"/>
    </div>
  );
}

export default App;
