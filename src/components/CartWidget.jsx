import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import { FaShoppingCart } from 'react-icons/fa';
import '../css/CartWidget.css';

export function CartWidget() {

    const { cart } = useContext(cartContext)

    const refreshContProducts = () => { //recorre cart y suma quantify
        let contProducts = 0;
        for (const product of cart) {
            contProducts += product.quantify;
        }
        return contProducts;
    }

    return (
        <div className='cart-widget'>
            <div className="count-product">{/*countProducts*/refreshContProducts()}</div>
            <FaShoppingCart size={'40px'} className='icon' />
        </div>
    );
};