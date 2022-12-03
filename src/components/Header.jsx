import React from "react";
import imgLogo from '../assets/logo-tecnolandia.png';
import { FormSearch } from "./FormSearch";
import '../css/Header-Form.css';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';

export function Header({ searchTxt, setSearchTxt } ) {
    return(
        <header className='header'>
            <div className="header__title-logo-container">
                <img src={imgLogo} alt='logo' className='header__logo'/>
                <h1 className='header__title'>Tecnolandia</h1>
            </div>
            <FormSearch className='header__form' searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
            <div className='header__rrss' >
                <SlSocialInstagram size={'20px'} className='rrss-icon' />
                <SlSocialTwitter size={'20px'} className='rrss-icon' />
                <FaWhatsapp size={'20px'} className='rrss-icon' />
            </div>
        </header>
    );
};