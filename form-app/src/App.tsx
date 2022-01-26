import React from 'react';
import ReportForm from './form/report-form/ReportForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing/Landing';
import './app.css';
import Login from './form/login-form/Login';
import Inquiry from './form/inquiry-form/Inquiry';
import ProtectedRoute from './core/route/ProtectedRoute';
import Admin from './admin-page/Admin';
import ROUTES from './core/route/routes';

function App() {
    return (
        <div className="app__container">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/send-ticket" element={<ReportForm />} />
                    <Route path="/inquiry" element={<Inquiry />} />
                    <Route path="/login" element={<Login />} />
                    <Route path={ROUTES.ADMIN} element={<ProtectedRoute />}>
                        <Route path={ROUTES.ADMIN} element={<Admin />} />
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <h2>There&apos;s nothing here!</h2>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
