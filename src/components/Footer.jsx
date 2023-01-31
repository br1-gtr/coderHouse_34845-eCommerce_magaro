import React from "react";
import '../css/Footer.css';
import { BsWhatsapp, BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
export function Footer() {
    const sizeIcon = 30;

    return (
        <div className='footer' id='footer'>
            <div className='footer__data-container'>
                <div className='footer__contact'>
                    <h3>CONTACTO</h3>
                    <div className='footer__contact--icons'>
                        <BsWhatsapp size={sizeIcon} className='footer__icon' />
                        <BsInstagram size={sizeIcon} className='footer__icon' />
                        <BsTwitter size={sizeIcon} className='footer__icon' />
                        <BsFacebook size={sizeIcon} className='footer__icon' />
                    </div>
                </div>
                <div className='footer__location'>
                    <h3>DONDE ESTAMOS</h3>
                    <p>Av. Siempre Viva 742</p>
                    <p>Tel: +54 341-6888877</p>
                    <p>Lun a Vie 9hs a 18hs</p>
                </div>
                <div className='footer__payment'>
                    <h3>MEDIOS DE PAGO</h3>
                    <div className='footer__payment--icons'>
                        <FaCcVisa size={sizeIcon} className='footer__icon' />
                        <FaCcMastercard size={sizeIcon} className='footer__icon' />
                        <SiAmericanexpress size={sizeIcon} className='footer__icon' />
                        <FaCcPaypal size={sizeIcon} className='footer__icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}