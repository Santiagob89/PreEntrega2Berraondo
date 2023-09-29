import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const LoginUser = () => {
  return (
    <div className='flex items-center justify-between'>
      <Link to={"/Login"}> 
        <button className="inline-flex items-center rounded-md gap-2 px-2 py-1 text-lg md:text-xs" > 
          <p className='hidden md:block'>Iniciar sesión</p>
        </button>
        <button className="inline-flex items-center rounded-md gap-2 px-2 py-1 text-lg md:text-xs" >	
          <FaUser/>
        </button>
      </Link>
    </div>
  )
}

export default LoginUser