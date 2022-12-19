import React from "react";
import { CartWidget } from './CartWidget';
import '../css/NavBar.css';

import { Link } from 'react-router-dom';
export function NavBar() {
    return (
        <div className='nav'>
            <div className='nav__items'>
                <div>Inicio</div>
                <div>
                    <Link to="/" className='link-styles'>
                        <span>Productos</span>
                    </Link>
                </div>
                <div className='nav__categ'>
                    <div>Categorias</div>
                    <ul className='nav__categ-items'>
                        <Link to="/category/gamer" className='link-styles'>
                            <li>
                                Gamer
                            </li>
                        </Link>
                        <Link to="/category/ofice" className='link-styles'>
                            <li>
                                Oficina
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>Contacto</div>
            </div>
            <Link to="/carrito" className='link-styles'>
                <CartWidget countProduct={9} />
            </Link>
        </div>
    );
};