import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppContext from '../context/AppContext';

function ProtectedRoute() {
    const { appState } = useContext(AppContext);

    return appState.user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
