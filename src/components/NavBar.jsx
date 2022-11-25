import React from "react";
import { CartWidget } from './CartWidget';
import '../css/NavBar.css';
export function NavBar(){
    return(
        <div className='nav'>
                <div className='nav__items'>
                    <div>Inicio</div>
                    <div>Productos</div>
                    <div>Quines Somos</div>
                    <div>Contacto</div>
                </div>
                <CartWidget countProduct={9}/>
        </div>
    );
};