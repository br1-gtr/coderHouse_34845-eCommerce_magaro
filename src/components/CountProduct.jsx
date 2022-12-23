import React from "react";
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle } from 'react-icons/fi';
import '../css/CountProduct.css';
export function CountProduct({ contProduct, setContProduct }) {

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

    return (
        <div className='cont'>
            <FiPlusCircle className='cont__plus' onClick={plusProduct} />
            <div className='cont__value'>{contProduct}</div>
            <FiMinusCircle className='cont__minus' onClick={minusProduct} />
        </div>
    )
}