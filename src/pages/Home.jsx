import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import '../styles/homestyle.css'

import heroImg from '../assets/images/white-shoe.png'

import myProducts from '../assets/data/myProducts'
import ProductsList from '../components/UI/ProductsList'

const Home = () => {

    const [popularProducts, setpopularProducts] = useState([])
    const [collections, setCollections] = useState([])

    useEffect(() => {
        const filteredpopularProducts = myProducts.filter(product => product.category === 'popular')
        const filteredcollections = myProducts.filter(product => product.category === 'shoes')

        setpopularProducts(filteredpopularProducts)
        setCollections(filteredcollections)
    }, [])

    return (
        <Helmet title={'Home'}>
            <section className="hero-section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero-content">
                                <p>Your only one stop shoe store since 2024</p>
                                <h2>Every Brand, Every Style, Every Journey Awaits your Discovery</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sunt dicta nemo neque deserunt harum reprehenderit sed molestiae ea amet vel incidunt nisi minima, iusto voluptatem quis facere illum modi!</p>
                                <motion.button whileTap={{ scale: 1.5 }} className="shop-btn">SHOP NOW</motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero-img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="popular-products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2 className="title">What's Popular</h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>

            <section className="featured-brand">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="brand-container">
                                <img src="" alt="" />
                                <div className="border-design"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="showcase">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="title">View our Collections</h2>
                        </Col>
                        <ProductsList data={collections} />
                    </Row>
                </Container>
            </section>

        </Helmet>


    )
}

export default Home