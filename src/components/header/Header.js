import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'

import "./Header.css";


function Header() {
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 120) {
                setScroll(false)
            } else {
                setScroll(true)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className="header ">

            <div className="">
                <div className="header__top">
                    <div className="header__top-logo">
                        <h4 >LbDesign</h4>
                        <span> beautifull shop</span>
                    </div>
                    <div className="header__top-search-wrapper container my-3">
                        <div className="header__top-user">
                            <FiUser size={20} />
                            <span>Cuenta</span>
                        </div>
                        <div className="input-group header__top-search w-75">
                            <input type="text" className="form-control border-primary" placeholder="Buscar productos" />
                            <div className="input-group-append">
                                <span className="input-group-text text-light  bg-danger border-primary" id="basic-addon2">Buscar</span>
                            </div>
                        </div>
                        <div className="header__top-icons">
                            <FiShoppingCart style={{ marginBottom: "0", color: '#222', display: 'inline-flex' }} size={30} />
                            <span className="header__top-item">0</span>
                        </div>
                    </div>

                </div>

                <div className={scroll ? 'header__bottom' : 'scroll'}>
                    <nav className="header__nav">
                        <ul className="header__nav-links">
                            <NavLink to='/' className='header__nav-link'><li>Inicio</li></NavLink>
                            <NavLink to='/' className='header__nav-link'><li>Belleza</li></NavLink>
                            <NavLink to='/' className='header__nav-link'><li>Tecnologias</li></NavLink>
                            <NavLink to='/' className='header__nav-link'><li>Paginas</li></NavLink>
                            <NavLink to='/' className='header__nav-link'><li>Contactos</li></NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
