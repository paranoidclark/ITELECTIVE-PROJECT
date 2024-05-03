import React from 'react'
import { NavLink } from 'react-router-dom'
import './headerstyle.css'
import { useSelector } from 'react-redux'

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    let dummy = (totalQuantity > 0 ? "!" : "")

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
                        <h1>Sole Search</h1>
                    </div>
                </div>

                <div className="nav-icons">
                    <span className="cart-icon">
                        <i class="ri-archive-line"></i>
                        <span className='badge'>{dummy}</span>
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