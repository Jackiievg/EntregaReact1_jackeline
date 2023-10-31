import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from '../Productos/productos.json'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promise = new Promise ((resolve)=>{
            setTimeout(() => {
                resolve(productos.find(item=> item.id === parseInt(id)))
                
            }, 1000)
        });
        promise.then((data)=>{
            setItem(data)
        })
    }, [id]) 

    return (
        <div>
            <ItemDetail item={item}/>

        </div>
    )
}

export default ItemDetailContainer;