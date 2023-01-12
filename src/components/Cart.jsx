import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import '../css/Cart.css';
import { MdDeleteForever } from 'react-icons/md';

export function Cart() {
    const { cart, totalCart, deleteToCart } = useContext(cartContext);
    //console.log(totalCart);
    const offPrice = (price, off) => {
        return price - ((price * off) / 100)
    }
    const quantifyProductTotal = (price, quantify) => {
        return price * quantify
    }

    return (
        <div className='cart__container'>
            <table>
                <tr className='cart__header'>
                    <td>Producto</td>
                    <td>Precio</td>
                    <td>Descuento</td>
                    <td>Ahora</td>
                    <td>Cant.</td>
                    <td>Total</td>
                </tr>

                {
                    cart.map(item => {
                        const totalPrice = quantifyProductTotal(offPrice(item.price, item.off), item.quantify)
                        return <tr key={item.id} className='cart__item'>
                            <td><img src={item.img} alt="" className='cart__item--img' /></td>
                            <td className='cart__item--price'>$ {item.price}</td>
                            <td ><p className='cart__item--off'>{item.off} %</p></td>
                            <td>$ {offPrice(item.price, item.off)}</td>
                            <td>{item.quantify}</td>
                            <td className='cart__item--final-price'>$ {totalPrice}</td>
                            <td><button onClick={() => { deleteToCart(item.id, totalPrice) }}><MdDeleteForever size={22} /></button></td>
                        </tr>
                    })
                }


            </table>
            <h1>TOTAL CARRITO: $ {totalCart}</h1>
        </div>
    )
}