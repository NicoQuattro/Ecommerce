
import './App.css';
import './components/Navbar';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <ItemListContainer/>
    </div>
  );
}

export default App;
