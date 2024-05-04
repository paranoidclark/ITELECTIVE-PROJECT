import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'

import '../styles/loginstyle.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signIn = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            const user = userCredential.user
            setLoading(false)
            alert('LADIES & GENTLEMEN, IM IN')
            navigate('/cart')
        } catch (error) {
            setLoading(false)
            alert('YAWA')
        }
    }

    return (
        <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        {
                            loading ? <Col lg='12' className='text-center'><h5>Loading...</h5></Col> : (
                                <Col lg='6' className="m-auto text-center p-4">
                                    <h3 className="login-title">Login</h3>
                                    <Form className="auth-form" onSubmit={signIn}>
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
                            )
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login