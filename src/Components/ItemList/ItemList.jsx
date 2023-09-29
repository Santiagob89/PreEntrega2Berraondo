import React from 'react'
import Item from '../Item/Item';


const ItemList = ({item}) => {
  return (
    
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
      item.map(item=>
      <div
       key={item.id}>
       <Item item={item}/> 
       </div>
      )   
      }
   </div>
  )
}

export default ItemList