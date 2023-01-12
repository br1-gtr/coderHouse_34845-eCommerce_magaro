import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/CartContextProvider";

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
        <div>
            {
                cart.map(item => {
                    const totalPrice = quantifyProductTotal(offPrice(item.price, item.off), item.quantify)
                    return <div key={item.id}>
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>{item.off}%</p>
                        <p>$ {offPrice(item.price, item.off)}</p>
                        <p>Cant: {item.quantify}</p>
                        <h4>Total: $ {totalPrice}</h4>
                        <button onClick={() => { deleteToCart(item.id, totalPrice) }}>X</button>
                    </div>
                })
            }
            <h1>TOTAL CARRITO: $ {totalCart}</h1>
        </div>
    )
}