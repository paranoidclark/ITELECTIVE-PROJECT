import React from 'react'
import './headerstyle.css'
import { useSelector } from 'react-redux'

import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    let dummy = (totalQuantity > 0 ? "!" : "")

    const navigateToHome = () => {
        navigate('/home')
    }

    const navigateToCart = () => {
        navigate('/cart')
    }


    return (
        <div className="nav-container">
            <div className="announcements">
                <h5>INTERNATIONAL SHIPPING AVAILABLE <span>Learn More</span></h5>
            </div>
            <div className="header">

                <div className="nav-search-icon">
                    <span><i class="ri-search-line"></i></span>
                </div>

                <div className="logo">
                    <div>
                        <h1 onClick={navigateToHome}>Sole Search</h1>
                    </div>
                </div>

                <div className="nav-icons">
                    <span className="cart-icon" onClick={navigateToCart}>
                        <i class="ri-archive-line"></i>
                        <span className='badge' >{dummy}</span>
                    </span>
                    <span><i class="ri-user-line"></i></span>
                </div>
            </div>

            <div className="navigation">
                <ul className="menu">
                    <li className="nav-item">
                        <NavLink to='home'>What's Popular</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='home'>Adidas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='home'>Nike</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='home'>Vans</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='home'>SALE</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header