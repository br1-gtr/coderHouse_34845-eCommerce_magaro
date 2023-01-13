import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";
import '../css/Cart.css';
import { MdDeleteForever } from 'react-icons/md';
import { SiStarship } from 'react-icons/si';
import { Link } from "react-router-dom";

export function Cart() {
    const { cart, totalCart, deleteToCart, buyCart } = useContext(cartContext);
    //console.log(totalCart);
    const offPrice = (price, off) => {
        return price - ((price * off) / 100)
    }
    const quantifyProductTotal = (price, quantify) => {
        return price * quantify
    }

    return (
        (cart.length === 0)
            ? <div className='cart__container'>
                <div className='cart__empty'>
                    <h2>El carrito aun no tiene productos</h2>
                </div>
                <h1>TOTAL CARRITO: $ {totalCart}</h1>
            </div>

            : <div className='cart__container'>
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
                <h2>Total Carrito: $ {totalCart}</h2>
                <Link to="/buy-cart">
                    <button className='btn-buy-cart' onClick={() => { buyCart() }}><SiStarship size={28} /><p>Finalizar Compra</p></button>
                </Link>
            </div>
    )
}