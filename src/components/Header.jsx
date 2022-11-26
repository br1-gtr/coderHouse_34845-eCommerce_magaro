import React from "react";
import imgLogo from '../assets/logo-tecnolandia.png';
import { FormSearch } from "./FormSearch";
import '../css/Header-Form.css';

export function Header() {
    return(
        <header className='header'>
        <div className="header__title-logo-container">
            <img src={imgLogo} alt='logo' className='header__logo'/>
            <h1 className='header__title'>Tecnolandia</h1>
        </div>
        <FormSearch className='header__form'/>
        <div className='header__banner'>
            <p>Accedé a envios <strong>gratis</strong> a todo el pais por <strong>$899</strong> por mes.</p>
        </div>
        </header>
    );
};