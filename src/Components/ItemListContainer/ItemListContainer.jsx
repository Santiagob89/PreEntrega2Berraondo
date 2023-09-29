
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
       try{
       const data = await new Promise((resolve)=>{
       setTimeout(()=>{
       resolve(id ? arrayProductos.filter(item=> item.categoria === id) : arrayProductos)
      }, 2000);
       });
       setItem(data);
     }catch(error){
       console.log('Error:', error);
     }
   };
   fetchData();

    }, [id])

 return (
    
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ItemList item={item}/>
        </div>
     </div>
 )
}

export default ItemListContainer



