import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './footerstyle.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="footer-link about">
                            <h3>About Sole Search</h3>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>About Us</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Contact Us</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Careers</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Store Locator</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Affiliates</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Sitemap</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="footer-link service">
                            <h3>Customer Service</h3>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>My Wishlist</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Frequently Asked Questions</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Terms of Service</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Shipping Policy</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Refund Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="subletter">
                            <h3>Sign up for Sole Search news</h3>
                            <p>Be the first to know about our special offers, upcoming sales, special events, new arrivals, and more.</p>
                            <input type="text" placeholder="Enter your email" className='signup-email' />
                            <span className='email-icon'><i class="ri-mail-line"></i></span>
                            <div className="subletter-icons">
                                <span><i class="ri-facebook-fill"></i></span>
                                <span><i class="ri-instagram-line"></i></span>
                                <span><i class="ri-twitter-line"></i></span>
                                <span><i class="ri-youtube-line"></i></span>
                            </div>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <div className="footer-copyright">
                            <p>© 2024 Sole Search | All Rights Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer