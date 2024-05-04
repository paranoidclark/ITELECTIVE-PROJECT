import React, { useRef } from 'react'
import './headerstyle.css'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate, Link } from 'react-router-dom'

import useAuth from '../useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'

const Header = () => {
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const profileActionRef = useRef(null)
    let dummy = (totalQuantity > 0 ? "!" : "")

    const navigateToHome = () => {
        navigate('/home')
    }

    const navigateToCart = () => {
        navigate('/cart')
    }

    const logout = () => {
        signOut(auth).then(() => {
            alert('Logged out')
            navigate('/home')
        }).catch(err => {
            alert('YAWA')
        })
    }

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('showActions')


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
                    <div className='profile'>
                        <i
                            class="ri-user-line"
                            onClick={toggleProfileActions}
                        ></i>

                        <div
                            className="profile-actions"
                            ref={profileActionRef}
                            onClick={toggleProfileActions}
                        >
                            {
                                currentUser ? (
                                    <span onClick={logout}>Logout</span>
                                ) : (
                                    <div className='d-flex align-items-center justify-content-center flex-column lh-2 two-choices'>
                                        <Link to='/signup'>Signup</Link>

                                        <Link to='/login'>Login</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
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