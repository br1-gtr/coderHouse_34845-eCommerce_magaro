import React from "react";
import '../css/ItemListContainer.css';
import { Item } from "./Item";


export function ItemListContainer({ products }) {
    return(
        <div className='products-container'>
            {console.log(products.length) }
            {
                   
                (products.length !== 0) ?    
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
                    }): <h1>No se encontraron productos :(</h1>
            }
            
        </div>
    );
};