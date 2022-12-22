import React from "react";
import { useState, useContext } from "react";
import { cartContext } from "../context/CartContextProvider";

import '../css/Item.css';
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle } from 'react-icons/fi';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Item({ id, imgA, imgB, name, description, price, stock, off }) {

    const [contProduct, setContProduct] = useState(1);

    const plusProduct = () => {
        if (contProduct < 9) {
            setContProduct(contProduct + 1);
        };
    };
    const minusProduct = () => {
        if (contProduct > 1) {
            setContProduct(contProduct - 1);
        };
    };

    const { addToCart, cart } = useContext(cartContext);

    console.log(cart);

    const clickHandler = () => {
        addToCart(id, name, contProduct);
    }

    return (

        <div className='item'>

            <div className='item__img-container'>
                <img src={imgA} alt="foto producto" className='item__img imgA' />
                <img src={imgB} alt="foto producto" className='item__img imgB' />
                <p className="item__price-off">{off} % OFF</p>
            </div>

            <div className='cont'>
                <FiPlusCircle className='cont__plus' onClick={plusProduct} />
                <div className='cont__value'>{contProduct}</div>
                <FiMinusCircle className='cont__minus' onClick={minusProduct} />
            </div>
            <Link to={`item/${id}`} className='link-styles'>
                <div className='item__info'>
                    <p className='item__info--title'>{name}</p>
                    <p>Descripción: <i>{description.processor}-{description.ram}GB RAM-{description.memory}GB-{(description.gi ? description.gi : 'Onboard GI')}-{description.so}</i></p>
                    <p className='item__info--price'>$ {price}</p>
                    <p className={stock ? 'item__info--stock' : 'item__info--NOstock'}>{stock ? 'En Stock' : 'Sin Stock'}</p>
                </div>
            </Link>
            <button className='item__btn' onClick={clickHandler}>
                <FaCartPlus /><p>Agregar al Carrito</p>
            </button>
        </div >

    );
};