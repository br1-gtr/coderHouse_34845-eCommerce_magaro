import React from "react";
import '../css/ItemListContainer.css';
import { Item } from "./Item";


export function ItemListContainer( {products,category} ) {
    return(
        <div className='products-container'>
            {
                (products.length !== 0) ?    
                    ((category === undefined) //muestra ambas categorias
                    ? products.map( product => {
                        return <Item 
                                {...product} 
                                key={product.id}
                                />
                    })
                    :products.filter(product => product.gamer === category) //filtro por categoria gamer/oficina
                    .map( product => {
                        return <Item 
                                {...product} 
                                key={product.id}
                                />
                    })): <h1>No se encontraron productos :(</h1>
            }
        </div>
    );
};