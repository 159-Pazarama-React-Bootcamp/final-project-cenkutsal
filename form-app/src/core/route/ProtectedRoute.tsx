import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AppContext from '../context/AppContext';
import ROUTES from './routes';

function ProtectedRoute() {
    const { appState } = useContext(AppContext);

    if (appState.isInitialRequestFetched) {
        return appState.user ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
    }

    return null;
}

export default ProtectedRoute;
