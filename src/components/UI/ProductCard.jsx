import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/productstyle.css'
import { Col } from 'reactstrap'

const ProductCard = ({ product }) => {
    return (
        <Col lg='3' md='4' >
            <div className="product-item" className="mb-2">
                <div className="product-img">
                    <motion.img whileHover={{ scale: 1.05 }} src={product.imgUrl} alt="" />
                </div>
                <div className="p-2 product-info text-center">
                    <h3 className="product-name">{product.name}</h3>
                    <span>{product.brand}</span>
                </div>
                <div className="product-card-bottom d-flex align-items-center justify-content-center p-2">
                    <span className="price">{product.price}</span>
                    <motion.span whileTap={{ scale: 2 }} whileHover={{ scale: 1.2 }}><i class="ri-add-circle-line"></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard