import React from "react";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import '../css/Header-Form.css';
export function FormSearch({searchTxt, setSearchTxt}) {

    const handleSubmit = evt => {
        evt.preventDefault();
       console.log(searchTxt);
    }

    const handleChange = evt => {
        setSearchTxt(evt.target.value)
    }

    return(
            <form action="" className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar productos, marcas y mas..." className="form__input" value={searchTxt} onChange={handleChange}/>
                <button type='submit' className='form__btn'>
                    <FaSearch size={'22px'}/>
                </button>
            </form>
    );
};