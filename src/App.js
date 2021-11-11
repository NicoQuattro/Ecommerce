
import './App.css';
import './components/Navbar';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer tittle="listado de productos"/>
    </div>
  );
}

export default App;
