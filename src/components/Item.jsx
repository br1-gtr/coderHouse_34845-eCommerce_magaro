import React from "react";
import '../css/Item.css';

export function Item({ imgA, imgB, name, description, price, off, stock }) {
    return(
        <div className='item'>

            <div className='item__img-container'>
                <img src={imgA} alt="foto producto" className='item__img imgA'/>
                <img src={imgB} alt="foto producto" className='item__img imgB'/>
                <p className="item__price-off">{off} % OFF</p>
            </div>
            <div className='item__info'>  
                <p className='item__info--title'>{name}</p>
                <p>Descripción: <i>{description.processor}-{description.ram}GB RAM-{description.memory}GB-{(description.gi?description.gi:'Onboard GI')}-{description.so}</i></p>
                <p className='item__info--price'>$ {price}</p>
                <p className={stock ? 'item__info--stock':'item__info--NOstock'}>{stock ? 'En Stock':'Sin Stock'}</p>
            </div>
            <button className='item__btn'>+Agregar al Carrito</button>
        </div>
    );
};