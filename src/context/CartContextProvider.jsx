import React from "react";
import { useState, createContext } from "react";

export const cartContext = createContext({});

export function CartContextProvider({ defaultValue = [], children }) {

    const [cart, setCart] = useState(defaultValue);
    const [totalCart, setTotalCart] = useState(0);

    const isInCart = id => { //check para ver si producto ya existe en cart
        return cart.find(product => product.id === id)
    }

    const addToCart = (id, name, quantify, img, price, off) => {

        if (isInCart(id)) { //verifica si existe el producto(id) en el cart
            const copyCart = [...cart]; //copia de cart para modificar y luego sobreescribir el cart original

            for (const product of copyCart) {
                if (product.id == id) {
                    product.quantify += quantify;
                }
            }
            setCart(copyCart) //sobreescribe cart con copia luego de sumar quantify
        } else {
            setCart([ //SINO agrega producto nuevo
                ...cart,
                {
                    id,
                    name,
                    quantify,
                    img,
                    price,
                    off
                }
            ])
        }
        setTotalCart(totalCart + ((price - (price * off) / 100) * quantify))
    };

    const deleteToCart = (id, priceProduct) => {
        console.log('Producto ' + id + ' eliminad del CARRITO' + 'Precio: ' + priceProduct);

        const copyCart = [...cart];
        setCart(copyCart.filter(item => item.id !== id)); // Filtra producto segun id para descartarlo del cart

        setTotalCart(totalCart - priceProduct);//actualiza total de cart, descontando valor de producto pasado por id

    }

    return (
        <cartContext.Provider value={{ addToCart, deleteToCart, cart, totalCart }}>
            {children}
        </cartContext.Provider>
    )

}

