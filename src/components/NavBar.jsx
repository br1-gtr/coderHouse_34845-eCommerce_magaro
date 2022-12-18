import React from "react";
import { CartWidget } from './CartWidget';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
export function NavBar(){
    return(
        <div className='nav'>
                <div className='nav__items'>
                    <div>Inicio</div>
                    <div>Productos</div>
                    <div className='nav__categ'>
                        <div>Categorias</div>
                        <ul className='nav__categ-items'>
                            <Link to="/category/gamer">
                                <li>
                                    Gamer
                                </li>
                            </Link>
                            <Link to="/category/ofice">
                                <li>
                                    Oficina
                                </li>
                            </Link>
                        </ul> 
                    </div>
                    <div>Contacto</div>
                </div>
                <CartWidget countProduct={9}/>
        </div>
    );
};