import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Spinner } from 'react-bootstrap';
import '../css/Loader.css';

export function Loader() {
    return (
        <div className='cont-loader'>
            <div className='spinner'></div>
            <div className='spinner-child'></div>
            <h2 className='spinner-txt'>Cargando productos...</h2>
        </div>
    )
}