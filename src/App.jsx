import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { products } from "./products.js";

function App() {

  const [searchTxt, setSearchTxt] = useState(''); //Estados para buscardor, pasa a Header - FormSearch

  const productListFilter = products.filter(product =>  //filter para render de productos segun FILTRO
                                    product.description.maker.toLowerCase().includes(searchTxt.toLowerCase()) ||
                                    product.description.processor.toLowerCase().includes(searchTxt.toLowerCase()) ||
                                    product.description.ram.toLowerCase().includes(searchTxt.toLowerCase()) ||
                                    product.description.memory.toLowerCase().includes(searchTxt.toLowerCase()) ||
                                    product.description.gi.toLowerCase().includes(searchTxt.toLowerCase()) ||
                                    product.description.so.toLowerCase().includes(searchTxt.toLowerCase())
                                );
                                
  return (
    <div className="App">
      <Header searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <NavBar />
      <ItemListContainer products={productListFilter} /> 
    </div>
  );
}

export default App;
