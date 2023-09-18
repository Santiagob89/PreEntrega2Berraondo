import React from 'react'
import { ShoppingCartIcon} from '@heroicons/react/24/outline';


function CartWidget() {
  return (
    <div className='flex items-center' >
      <p className= 'hidden sm:text-black'>Tienda</p>
      <button className="inline-flex items-center rounded-md px-2 py-1 text-xs font-100 text-black ">
        <ShoppingCartIcon className="w-6 h-6 mr-1" aria-hidden="true" />
        <span className="sr-only">View notificationsStock</span>
      </button>
    </div>
  )
}

export default CartWidget