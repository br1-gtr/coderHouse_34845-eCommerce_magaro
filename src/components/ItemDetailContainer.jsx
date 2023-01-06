import React from "react";
import { useParams } from "react-router-dom";
import { BtnAddToCart } from "./BtnAddToCart";
import '../css/ItemDetailContainer.css';
import { TbTruckDelivery } from 'react-icons/tb';
export function ItemDetailContainer({ data }) {
    let { id } = useParams(); //usa parametro  de ruta para identificador

    const item = data.find(item => item.id === id) //filtra item por id

    const offPrice = () => {
        const price = item.price;
        const off = item.off
        return price - ((price * off) / 100)
    }

    return (
        <div className='item-detail'>
            <h2>{item.name}</h2>
            <div className='item-detail__info'>
                <img src={item.imgA} alt="imagen item" />
                <div className='item-detail__info--features'>
                    <p><strong>Fabricante: </strong>{item.description.maker}</p>
                    <p><strong>Procesador: </strong>{item.description.processor}</p>
                    <p><strong>Memoria RAM: </strong>{item.description.ram} GB</p>
                    <p><strong>Memoria SSD </strong>{item.description.memory} GB</p>
                    <p><strong>Sistema Operativo: </strong>{item.description.so}</p>
                    <p><strong>Precio: </strong><strike>${item.price}</strike> <strong>${offPrice()}</strong></p>
                    <BtnAddToCart id={item.id} name={item.name} />
                </div>

            </div>
            <div className='item-detail__delibery'>
                <TbTruckDelivery size={'25px'} />
                <p>Envio gratis a todo el pais</p>
            </div>

        </div>
    )
}