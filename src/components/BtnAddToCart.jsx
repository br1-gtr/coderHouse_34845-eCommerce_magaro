import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import { FaCartPlus } from 'react-icons/fa';

import '../css/Item.css';

export function BtnAddToCart({ id, name, contProduct = 1, imgA, price, off, stock }) {

    const { addToCart } = useContext(cartContext); //context CART

    const clickHandler = () => {
        stock && addToCart(id, name, contProduct, imgA, price, off);
    }
    return (
        <button className='item__btn' onClick={clickHandler}>
            <FaCartPlus /><p>Agregar al Carrito</p>
        </button>
    )
}