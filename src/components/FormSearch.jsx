import React from "react";
import { FaSearch } from 'react-icons/fa';
import '../css/Header-Form.css';
export function FormSearch({ searchTxt, setSearchTxt }) {

    const handleChange = evt => {
        setSearchTxt(evt.target.value);

    }

    return (
        <form action="" className="form">
            <input type="text" placeholder="Buscar productos, marcas y mas..." className="form__input" value={searchTxt} onChange={handleChange} />
            <FaSearch className="icon" size={'22px'} />
        </form>
    );
};