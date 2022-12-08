import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
//import { products } from "./products.js";
import { useEffect } from 'react';
function App() {

  const [searchTxt, setSearchTxt] = useState(''); //Estados para buscardor, pasa a Header - FormSearch
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = () => {
    fetch("./productsList.json")
      .then( res => res.json() )
      .then( data => {
        setProducts(data)
        setTimeout(()=>{
          setIsLoading(true)
        },3000)
      })
  }

  useEffect( ()=>{ //llamada al json con info de productos, setTimeOut para loading
    fetchData()
  },[])

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
      {
        (isLoading) 
        ? <ItemListContainer products={productListFilter} /> 
        : <h1>Cargando...</h1>
      }
    </div>
  );
}

export default App;
