import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/loginstyle.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className="m-auto text-center">
                            <h3 className="login-title">Login</h3>
                            <Form className="auth-form">
                                <FormGroup className="form-group">
                                    <h5>Email</h5>
                                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <h5>Password</h5>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                                </FormGroup>

                                <button type="submit" className="auth-btn">Log In</button>
                                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login