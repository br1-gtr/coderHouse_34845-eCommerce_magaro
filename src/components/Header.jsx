import React from "react";
import imgLogo from '../assets/logo-tecnolandia.png';
import { FormSearch } from "./FormSearch";
import '../css/Header-Form.css';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export function Header() {
    return (
        <header className='header' id='header'>
            <Link to="/" className='link-styles'>
                <div className="header__title-logo-container">
                    <img src={imgLogo} alt='logo' className='header__logo' />
                    <h1 className='header__title'>Tecnolandia</h1>
                </div>
            </Link>
            <FormSearch className='header__form' />
            <div className='header__rrss' >
                <SlSocialInstagram size={'20px'} className='rrss-icon' />
                <SlSocialTwitter size={'20px'} className='rrss-icon' />
                <FaWhatsapp size={'20px'} className='rrss-icon' />
            </div>
        </header>
    );
};