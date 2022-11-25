import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import '../css/CartWidget.css';
export function CartWidget({ countProduct }) {
    return(
        <div className='cart-widget'>
            <div className="count-product">{countProduct}</div>
            <FaShoppingCart size={'50px'} className='icon'/>
        </div>
    );
};