import React from "react";
import '../css/ItemListContainer.css';
import { Item } from "./Item";


export function ItemListContainer( {products} ) {
    return(
        <div className='products-container'>
            {
                (products.length !== 0) ?    
                    products.map( product => {
                        return <Item 
                        {...product} 
                        key={product.id}
                        />
                    }): <h1>No se encontraron productos :(</h1>
            }
        </div>
    );
};