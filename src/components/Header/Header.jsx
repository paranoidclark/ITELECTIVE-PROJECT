import React from 'react'
import { NavLink } from 'react-router-dom'
import './headerstyle.css'

import logo from '../../assets/images/eco-logo.png'
import { Container, Row } from 'reactstrap';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Sole Store</h1>
                                <p>Since April 29, 2024</p>
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                <li className="nav__item">
                                    <NavLink to='home'>Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='home'>Shop</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to='home'>Cart</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="cart__icon"><i class="ri-archive-line"></i></span>
                            <span><i class="ri-user-line"></i></span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header