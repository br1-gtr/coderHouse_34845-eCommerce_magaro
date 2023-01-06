import React from "react";
import { useState } from "react";
import '../css/Item.css';
import { CountProduct } from "./CountProduct";
import { Link } from 'react-router-dom';
import { BtnAddToCart } from "./BtnAddToCart";

export function Item({ id, imgA, imgB, name, description, price, stock, off }) {

    const [contProduct, setContProduct] = useState(1)

    return (
        <div className='item'>
            <div className='item__img-container'>
                <img src={imgA} alt="foto producto" className='item__img imgA' />
                <img src={imgB} alt="foto producto" className='item__img imgB' />
                <p className="item__price-off">{off} % OFF</p>
            </div>
            <CountProduct contProduct={contProduct} setContProduct={setContProduct} />
            <Link to={`item/${id}`} className='link-styles'>
                <div className='item__info'>
                    <p className='item__info--title'>{name}</p>
                    <p>Descripción: <i>{description.processor}-{description.ram}GB RAM-{description.memory}GB-{(description.gi ? description.gi : 'Onboard GI')}-{description.so}</i></p>
                    <p className='item__info--price'>$ {price}</p>
                    <p className={stock ? 'item__info--stock' : 'item__info--NOstock'}>{stock ? 'En Stock' : 'Sin Stock'}</p>
                </div>
            </Link>
            <BtnAddToCart id={id} name={name} contProduct={contProduct} imgA={imgA} price={price} off={off} />
        </div >

    );
};