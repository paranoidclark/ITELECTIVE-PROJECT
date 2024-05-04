import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/loginstyle.css'

import { setDoc, doc } from 'firebase/firestore'
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config'
import { db } from '../firebase.config'


const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (file) {
                const uploadTask = uploadBytesResumable(file)

                uploadTask.on((error) => {
                    alert('error')
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            email: user.email,
                            username: username,
                        })
                    })
                })
            } else {
                await setDoc(doc(db, 'users', user.uid), {
                    uid: user.uid,
                    email: user.email,
                    username: username,
                })
            }

            setLoading(false)
            alert('NIGANA NAJUD YAWA KA')
            navigate('/login')
        } catch (error) {
            setLoading(false)
            alert('YAWA')
        }
    }

    return (
        <Helmet title='Signup'>
            <section>
                <Container>
                    <Row>
                        {
                            loading ? <Col lg='12' className='text-center'><h5>Loading...</h5></Col> : (
                                <Col lg='6' className="m-auto text-center">
                                    <h3 className="login-title">Signup</h3>
                                    <Form className="auth-form" onSubmit={signup}>
                                        <FormGroup className="form-group">
                                            <h5>Name</h5>
                                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                                        </FormGroup>
                                        <FormGroup className="form-group">
                                            <h5>Email</h5>
                                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                                        </FormGroup>
                                        <FormGroup className="form-group">
                                            <h5>Password</h5>
                                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                                        </FormGroup>

                                        <button type="submit" className="auth-btn">Sign Up</button>
                                        <p>Already have an account? <Link to="/login">Login</Link></p>
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

export default Signup