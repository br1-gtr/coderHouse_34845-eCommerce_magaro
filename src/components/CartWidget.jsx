import React from "react";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../context/CartContextProvider";
import { FaShoppingCart } from 'react-icons/fa';
import '../css/CartWidget.css';

export function CartWidget() {

    //const [countProducts, setCountProducs] = useState(0)
    const { cart } = useContext(cartContext)

    /*
        useEffect(() => { //ejecuta funcion contadora cada vez que varia cart
            refreshContProducts()
        }, [cart])
    */
    const refreshContProducts = () => { //recorre cart y suma quantify
        let contProducts = 0;
        for (const product of cart) {
            contProducts += product.quantify;
        }
        return contProducts;
        //setCountProducs(contProducts);
    }

    return (
        <div className='cart-widget'>
            <div className="count-product">{/*countProducts*/refreshContProducts()}</div>
            <FaShoppingCart size={'50px'} className='icon' />
        </div>
    );
};