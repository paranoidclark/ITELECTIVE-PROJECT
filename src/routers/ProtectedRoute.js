import React from 'react'
import useAuth from '../components/useAuth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth()
    return currentUser ? children : <Navigate to='/login' />
}

export default ProtectedRoute