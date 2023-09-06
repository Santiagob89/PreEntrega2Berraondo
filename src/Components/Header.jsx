import React from 'react'
import Logo from '../assets/img/logo.png'
import NavBar from './NavBar'
import CartWidget from './CartWidget'

const Header = () => {
  return (
    <header className = "bg-slate-800 flex  items-center justify-evenly    ">
        <img src={Logo} alt="Logo" width = "200" />
        <NavBar />
        <CartWidget />
    </header>
  )
}

export default Header