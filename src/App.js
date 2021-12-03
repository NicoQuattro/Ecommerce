
import './App.css';
import './components/Navbar';
import NavBar from './components/Navbar';
import {BrowserRouter , Routes,  Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavbarCategories from './components/NavbarCategories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <NavbarCategories/>
          <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="category/:id" element={<ItemListContainer/>}/>
          <Route path="item/:id" element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
