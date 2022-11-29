import React from "react";
import imgA from '../assets/img/0a.jpg';
import imgB from '../assets/img/0b.jpg';
import '../css/Item.css';

export function Item() {
    return(
        <div className='item'>
            <div className='item__img-container'>
                <img src={imgA} alt="foto producto" className='item__img imgA'/>
                <img src={imgB} alt="foto producto" className='item__img imgB'/>
                <p className="item__price-off">15 % OFF</p>
            </div>
            <div className='item__info'>  
                <p className='item__info--title'>Notebook Asus TUF</p>
                <p>Descripción: <i>i5 - 16GB RAM - SSD 512GB - RTX 3050 - SO W11</i></p>
                <p className='item__info--price'>$ 425.000</p>
                <p className='item__info--stock'>En Stock</p>
            </div>
            <button className='item__btn'>+Agregar al Carrito</button>
        </div>
    );
};