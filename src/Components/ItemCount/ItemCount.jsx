import React from "react";
import { useState } from "react";

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const aumentarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const disminuirStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(

        <div className="grid gap-4" id="itemcount">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button 
                    type="button" 
                    className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                    onClick={disminuirStock} >-
                </button>
                <button
                    type="number" 
                    className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ">
                    {counter} 
                </button>
                <button 
                    type="button" 
                    className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" 
                    onClick={aumentarStock} >
                    +
                </button>
            </div>

            <div className="flex flex-row">
                 <div className="col-md-2">
                    <button 
                        type="button" 
                        className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >
                            Agregar al carrito
                    </button>    
                </div>
            </div>
        </div>  
    )
}

export default ItemCount;