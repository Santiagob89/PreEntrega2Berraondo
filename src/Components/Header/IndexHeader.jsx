import React from 'react'
import Logo from '../../assets/img/logo.png'
import NavBar from './NavBar'
import CartWidget from './CartWidget'
import LoginUser from './LoginUser' 

const MainHeader = () => {
  return (
    <>
    <header className = "relative h-24 mx-auto flex items-center justify-around gap-2 p-4 bg-white ">
        <img src={Logo} alt="Logo" width = "200" />
        <NavBar />
        <div className='flex '>
          <CartWidget />
          <LoginUser />
        </div>
        
    </header>
    <span className="container mx-auto hidden h-[3px] w-full bg-gray-500 md:block"></span>
    </>
  )
}

export default MainHeader