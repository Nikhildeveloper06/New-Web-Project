import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <header className='sticky top-0 z-50'>
            {/* Glass effect navbar */}-
            <div className='px-4 fixed w-full top-0 py-3 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm'>
                <div className='max-w-7xl mx-auto flex justify-between items-center px-5'>
                    {/* Logo */}
                    <Link to='/'>
                        <h1 className='text-2xl text-black font-bold'>
                            Safa<span className='text-red-500'>rana</span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className='flex items-center gap-5'>
                        <nav className='hidden md:flex gap-7 items-center'>
                            <ul className='flex items-center font-semibold text-Black text-lg gap-7'>
                                <Link to='/'><li className="hover:text-red-400 transition">Home</li></Link> 
                                <Link to='/about'><li className="hover:text-red-400 transition">About Us</li></Link>
                                <Link to='/tours'><li className="hover:text-red-400 transition">Tours</li></Link>
                                <Link to='/gallery'><li className="hover:text-red-400 transition">Gallery</li></Link>
                                <Link to='/contact'><li className="hover:text-red-400 transition">Contact</li></Link>
                            </ul>
                           
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <HiMenuAlt1 
                            onClick={toggleMenu} 
                            className='cursor-pointer md:hidden text-white'
                            size={30}
                        />
                    </div>
                </div>

                {/* Responsive Menu (drawer/overlay) */}
                <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            </div>
        </header>
    )
}

export default Navbar
