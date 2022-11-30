import React from "react";
import { useState } from "react";
import '../css/Item.css';
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle } from 'react-icons/fi';
import { FaCartPlus } from 'react-icons/fa';

export function Item({ imgA, imgB, name, description, price, off, stock }) {

    const [contProduct, setContProduct] = useState(1);

    const plusProduct = () => {
        if( contProduct < 9) {
            setContProduct(contProduct + 1);
        };
    };
    const minusProduct = () => {
        if( contProduct > 1) {
            setContProduct(contProduct - 1);
        };
    };

    return(
        <div className='item'>

            <div className='item__img-container'>
                <img src={imgA} alt="foto producto" className='item__img imgA'/>
                <img src={imgB} alt="foto producto" className='item__img imgB'/>
                <p className="item__price-off">{off} % OFF</p>
            </div>

            <div className='cont'>
                    <FiPlusCircle className='cont__plus' onClick={plusProduct}/>
                    <div className='cont__value'>{contProduct}</div>
                    <FiMinusCircle className='cont__minus' onClick={minusProduct}/>
            </div>

            <div className='item__info'>  
                <p className='item__info--title'>{name}</p>
                <p>Descripción: <i>{description.processor}-{description.ram}GB RAM-{description.memory}GB-{(description.gi?description.gi:'Onboard GI')}-{description.so}</i></p>
                <p className='item__info--price'>$ {price}</p>
                <p className={stock ? 'item__info--stock':'item__info--NOstock'}>{stock ? 'En Stock':'Sin Stock'}</p>
            </div>

            <button className='item__btn'>
                <FaCartPlus/><p>Agregar al Carrito</p>  
            </button>
        </div>
    );
};