import { Routes, Route, Navigate } from 'react-router-dom'


import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="home" />} />
            <Route path='home' element={<Home />} />
            <Route
                path='cart'
                element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>}
            />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Routes>
    )
}

export default Routers