import React from 'react'
import '../styles/cartstyle.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'

const Cart = () => {
    return (
        <Helmet title='Cart'>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th></th>
                                    </tr>
                                </thead>
                            </table>
                        </Col>

                        <Col lg='3'>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart