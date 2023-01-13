import React from "react";
import '../css/BuyCart.css';
import { SiStarship } from 'react-icons/si';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import boxImg from '../assets/packaging.png';
export function BuyCart() {
    return (
        <div className='cart__container'>
            <div className='cart-buy'>
                <h2>Compra Finalizada!</h2>
                <div className='cart-buy__container-img'>
                    <BsFillPatchCheckFill size={45} className='cart-buy__check' />
                    <img src={boxImg} alt="" className='cart-buy__img' />
                </div>
                <div>
                    <h3>Tu producto está en camino <SiStarship size={35} /></h3>
                </div>
            </div>
        </div>
    )
}