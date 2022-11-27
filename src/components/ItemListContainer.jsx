import React from "react";
import '../css/ItemListContainer.css';
import { Item } from "./Item";
export function ItemListContainer({ greeting }) {
    return(
        <div className='products-container'>
            <h1>{greeting}</h1>
            <Item />
        </div>
    );
};