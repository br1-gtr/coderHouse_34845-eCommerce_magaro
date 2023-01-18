import './App.css';

import { useState, useEffect, useContext } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Loader } from './components/Loader';
import { Cart } from './components/Cart';
import { BuyCart } from './components/BuyCart';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
//import { products } from "./products.js";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import TxtSearchContext from './context/TxtSearchContext.js';
import { CartContextProvider } from './context/CartContextProvider.jsx';
//Imports FireBase
import { db } from "./db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {

  const [searchTxt, setSearchTxt] = useState(''); //Estados para buscardor, pasa a Header - FormSearch
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  console.log(searchTxt);
  //FIREBASE
  //collect FS
  const productsCollectionRef = collection(db, 'products');

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setIsLoading(true)
  }
  useEffect(() => { //get Products con FIREBASE
    getProducts()
    //console.log(products[0].description.maker);
  }, [])
  //Fin FireBase

  //get Products con json
  /*
const fetchData = () => {
  fetch("./productsList.json")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setTimeout(() => {
        setIsLoading(true)
      }, 3000)
    })
}

  useEffect(() => { //llamada al json con info de productos, setTimeOut para loading 
    fetchData()
  }, [])
  fin get Products con json
*/

  //filter para render de productos segun FILTRO
  const productListFilter = products.filter(product =>
    Object.values(product.description).toString() //pasa valores de objeto description a array y despues a string para usar en barra de busqueda
      .toLowerCase().includes(searchTxt.toLowerCase())
  );

  return (
    <div className="App">
      <TxtSearchContext.Provider value={{ searchTxt, setSearchTxt }}>
        <Header />
      </TxtSearchContext.Provider>
      <CartContextProvider>
        <NavBar />
        {
          (isLoading)
            ? (
              <Routes>
                <Route path="/" element={<ItemListContainer products={productListFilter} category={undefined} />} />
                <Route path="/category/ofice" element={<ItemListContainer products={productListFilter} category={false} />} />
                <Route path="/category/gamer" element={<ItemListContainer products={productListFilter} category={true} />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/item/:id" element={<ItemDetailContainer data={productListFilter} />} />
                <Route path="/category/ofice/item/:id" element={<ItemDetailContainer data={productListFilter} />} />
                <Route path="/category/gamer/item/:id" element={<ItemDetailContainer data={productListFilter} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/buy-cart" element={<BuyCart />} />
              </Routes>
            ) : <Loader />
        }
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
