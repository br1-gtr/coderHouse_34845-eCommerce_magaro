import React from "react";
import { CartWidget } from './CartWidget';
import '../css/NavBar.css';
import { MdComputer, MdHome, MdEmail } from 'react-icons/md';

import { Link as LinkRoute } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export function NavBar() {
    const sizeIcon = 35;
    return (
        <div className='nav'>
            <div className='nav__items'>
                <div>
                    <LinkRoute to="/" className='link-styles'>
                        <p className='icon-desk'>Inicio</p>
                        <LinkScroll to='header' spy={true} smooth={true} offset={50} duration={500}>
                            <MdHome className='icon-mobile' size={sizeIcon} />
                        </LinkScroll>
                    </LinkRoute>
                </div>

                <div>
                    <LinkRoute to="/" className='link-styles'>
                        <p className='icon-desk'>Productos</p>
                        <LinkScroll to='header' spy={true} smooth={true} offset={50} duration={500}>
                            <MdComputer className='icon-mobile' size={sizeIcon} />
                        </LinkScroll>
                    </LinkRoute>
                </div>
                <div className='nav__categ'>
                    <p className='icon-desk'>Categorias</p>
                    <ul className='nav__categ-items'>
                        <LinkRoute to="/category/gamer" className='link-styles'>
                            <li>
                                Gamer
                            </li>
                        </LinkRoute>
                        <LinkRoute to="/category/ofice" className='link-styles'>
                            <li>
                                Oficina
                            </li>
                        </LinkRoute>
                    </ul>
                </div>
                <div>
                    <LinkScroll to="footer" spy={true} smooth={true} offset={50} duration={500}>
                        <p className='icon-desk'>Contacto</p>
                        <MdEmail className='icon-mobile' size={sizeIcon} />
                    </LinkScroll>
                </div>
            </div>
            <div className='cart-widget'>
                <LinkRoute to="/cart" className='link-styles'>
                    <CartWidget />
                </LinkRoute>
            </div>
        </div >
    );
};