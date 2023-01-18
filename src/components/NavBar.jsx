import React from "react";
import { CartWidget } from './CartWidget';
import '../css/NavBar.css';
import { MdComputer, MdHome, MdEmail } from 'react-icons/md';

import { Link } from 'react-router-dom';
export function NavBar() {
    const sizeIcon = 35;
    return (
        <div className='nav'>
            <div className='nav__items'>
                <div>
                    <p className='icon-desk'>Inicio</p>
                    <MdHome className='icon-mobile' size={sizeIcon} />
                </div>

                <div>
                    <Link to="/" className='link-styles'>
                        <p className='icon-desk'>Productos</p>
                        <MdComputer className='icon-mobile' size={sizeIcon} />
                    </Link>
                </div>
                <div className='nav__categ'>
                    <p className='icon-desk'>Categorias</p>
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
                <div>
                    <p className='icon-desk'>Contacto</p>
                    <MdEmail className='icon-mobile' size={sizeIcon} />
                </div>
            </div>
            <div className='cart-widget'>
                <Link to="/cart" className='link-styles'>
                    <CartWidget />
                </Link>
            </div>
        </div>
    );
};