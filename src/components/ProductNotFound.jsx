import React from "react";
import '../css/ProductNotFound.css';
import { MdProductionQuantityLimits } from 'react-icons/md';

export function PRoductNotFound() {


    return (
        <div className='pnf__container'>
            <div className='pnf'>
                <MdProductionQuantityLimits size={150} />
                <h2>No se encontró producto.</h2>
            </div>
        </div>
    )
}