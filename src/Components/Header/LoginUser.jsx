import React from 'react'
import { FaUser } from 'react-icons/fa'


const LoginUser = () => {
  return (
    <div className='flex items-center justify-between'>
    <button className="inline-flex items-center rounded-md gap-2 px-2 py-1 text-lg md:text-xs" > 
    <p className='hidden md:block'>Iniciar sesión</p>
    <FaUser/>
    </button>
    </div>
  )
}

export default LoginUser