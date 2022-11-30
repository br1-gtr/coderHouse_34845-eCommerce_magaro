import React from "react";
import '../css/ItemListContainer.css';
import { Item } from "./Item";
import { products } from "../products.js";

console.log(products[0]);

export function ItemListContainer() {
    return(
        <div className='products-container'>
            {
                products.map( product => {
                    return <Item 
                        key={product.id}
                        imgA={product.imgA} 
                        imgB={product.imgB}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        off={product.off}
                        stock={product.stock}
                    />
                })
            }
            
        </div>
    );
};