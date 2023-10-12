import './App.css';
import CartWidget from '..src/Components/CartWidget/CartWidget';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import NavBar from '../src/Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='bienvenido a la tienda botanica'/>
      <CartWidget/>
    </div>
  );
}

export default App;
