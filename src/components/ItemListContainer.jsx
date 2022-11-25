import React from "react";
import '../css/ItemListContainer.css';
export function ItemListContainer({ greeting }) {
    return(
        <div className='products-container'>
            <h1>{greeting}</h1>
        </div>
    );
};