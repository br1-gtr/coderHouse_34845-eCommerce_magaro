import React from "react";
import imgA from '../assets/img/0a.jpg';
import imgB from '../assets/img/0b.jpg';
export function Item() {
    return(
        <div className='item'>
            <img src={imgA} alt="foto producto" className='item__img imgA'/>
            <img src={imgB} alt="foto producto" className='item__img imgB'/>
            <div className='item__info'>  
                <p>Notebook Asus TUF</p>
                <p>Descripción: <i>i5 - 16GB RAM - SSD 512GB - RTX 3050 - SO W11</i></p>
                <p>$ 425.000</p>
                <p>En Stock</p>
            </div>
            <button>+Carrito</button>
        </div>
    );
};