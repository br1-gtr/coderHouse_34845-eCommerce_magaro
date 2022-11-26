import './App.css';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer greeting={'Bienvenid@ :)'}/>
    </div>
  );
}

export default App;
