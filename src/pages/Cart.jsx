import React from 'react'
import '../styles/cartstyle.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import cartImg from '../assets/images/cart.jpg'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Helmet title='Cart'>
            <section className="cart-section">
                <div className="cart-img">
                    <img src={cartImg} alt="" />
                </div>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? (
                                    <div className="cart-empty">
                                        <h2 className='mb-3 text-weight-300'>Your Cart is Empty</h2>
                                        <p>Looks like you haven't added any items to the cart yet.</p>
                                        <p>Start shopping to fill it in</p>
                                    </div>
                                ) : (
                                    <table className="table bordered">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((product, index) => (
                                                    <Tr product={product} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )}
                        </Col>

                        <Col lg='3'>
                            <div className="subtotal-container">
                                <h5>Subtotal</h5>
                                <span>₱{totalAmount}</span>
                                <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                            </div>
                            <div>
                                <button className="checkout-btn"><Link>Checkout</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ product }) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(product.id))
    }

    return (
        <tr>
            <td>
                <img src={product.imgUrl} alt="" />
            </td>
            <td>{product.name}</td>
            <td>₱{product.price}</td>
            <td>{product.quantity}</td>
            <td><motion.i
                whileTap={{ scale: 2 }}
                whileHover={{ scale: 1.2 }}
                onClick={deleteProduct}
                className="ri-delete-bin-2-line"></motion.i ></td>
        </tr>
    )
}


export default Cart