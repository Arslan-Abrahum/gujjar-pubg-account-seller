import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import Loader from './Loader';

const ProtectedRoute = ({ children }) => {
    const { user, loading, login } = useContext(AuthContext);
    if (loading) {
        return <Loader/> // You can replace this with a loading spinner or other component
    }
    if (!user) {
        return <Navigate to="/login" />;
    } else {
        // If user exists, log them in
        login(user);
    }
    return children;
};

export default ProtectedRoute;