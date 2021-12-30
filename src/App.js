
import './App.css';
import './components/Navbar';
import NavBar from './components/Navbar';
import {BrowserRouter , Routes,  Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavbarCategories from './components/NavbarCategories';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <NavbarCategories/>
          <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="category/:id" element={<ItemListContainer/>}/>
          <Route path="item/:id" element={<ItemDetailContainer/>}/>
          <Route path="cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
      </CartProvider>

    </div>

  );
}

export default App;
