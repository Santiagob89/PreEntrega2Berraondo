import React from 'react'
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {useParams} from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetaileContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promes= new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find((item) => item.id === parseInt(id)))
            }, 2000)
        }); 
            promes.then((res) => {
                setItem(res)
            })
        }, [id])
        
  return (
        <div className='flex justify-center'> 
              <div className="flex w-full transform text-left text-base md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <ItemDetail item={item}/>   
                </div>
            </div>

        </div>
      
  )
}

export default ItemDetaileContainer