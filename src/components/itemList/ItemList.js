import React from 'react'
import db from "../../data/db";

function ItemList() {
    return (
        <div>
            {db.map((item) => (
                <div>
                    <p>{item.cliente}</p>
                    <p>{item.timeTest}</p>
                    <p>{item.linkVideo}</p>
                    <p>{item.tipoTarea}</p>
                    <p>{item.transcripcion}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList