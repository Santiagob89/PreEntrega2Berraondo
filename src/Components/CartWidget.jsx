import React from 'react'
import { ShoppingCartIcon} from '@heroicons/react/24/outline';


function CartWidget() {
  return (
    <div className='flex' >
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        12
      </span>
      <button>
        <ShoppingCartIcon className="block h-7 w-7 text-white" aria-hidden="true" />
      </button>
      
    </div>
  )
}

export default CartWidget