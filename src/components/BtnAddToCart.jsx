import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import { FaCartPlus } from 'react-icons/fa';

import '../css/Item.css';

export function BtnAddToCart({ id, name, contProduct = 1, imgA, price, off }) {

    const { addToCart, cart } = useContext(cartContext); //context CART

    const clickHandler = () => {
        addToCart(id, name, contProduct, imgA, price, off);
        console.log('compra!');
    }

    return (
        <button className='item__btn' onClick={clickHandler}>
            <FaCartPlus /><p>Agregar al Carrito</p>
            {console.log(cart)}
        </button>
    )
}