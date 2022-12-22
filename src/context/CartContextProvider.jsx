import React from "react";
import { useState, createContext } from "react";

const cartContext = createContext({});

export function CartContextProvider({ defaultValue = [], children }) {

    const [cart, setCart] = useState(defaultValue);

    const addToCart = name => {
        setCart([
            ...cart,
            {
                pct: name
            }
        ])
    };
    return (
        <cartContext.Provider value={addToCart}>
            {children}
        </cartContext.Provider>
    )

}

