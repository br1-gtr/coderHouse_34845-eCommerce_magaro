import React from "react";
import { useParams } from "react-router-dom";

export function ItemDetailContainer({ data }) {
    let { id } = useParams();

    const item = data.find(item => item.id === parseInt(id))

    return (
        <div>
            <h2>{item.name}</h2>
            <img src={item.imgA} alt="imagen item" />
            <p><strong>Fabricante: </strong>{item.description.maker}</p>
            <p><strong>Procesador: </strong>{item.description.processor}</p>
            <p><strong>Memoria RAM: </strong>{item.description.ram} GB</p>
            <p><strong>Memoria SSD </strong>{item.description.memory} GB</p>
            <p><strong>Sistema Operativo: </strong>{item.description.so}</p>
        </div>
    )
}