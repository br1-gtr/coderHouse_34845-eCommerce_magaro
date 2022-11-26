import React from "react";
import { FaSearch } from 'react-icons/fa';
import '../css/Header-Form.css';
export function FormSearch() {
    return(
            <form action="" className="form">
                <input type="text" placeholder="Buscar productos, marcas y mas..." className="form__input"/>
                <button className='form__btn'>
                    <FaSearch size={'22px'}/>
                </button>
            </form>
    );
};