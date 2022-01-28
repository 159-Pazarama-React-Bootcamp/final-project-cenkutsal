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
import InquiryDetail from './form/inquiry-form/inquiry-detail/InquiryDetail';
import TicketDetail from './admin-page/ticket-detail/TicketDetail';
import InquirySuccessful from './form/inquiry-form/inquiry-successful/InquirySuccessful';

function App() {
    return (
        <div className="app__container">
            <Router>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Landing />} />
                    <Route path={ROUTES.SEND_TICKET} element={<ReportForm />} />
                    <Route path={ROUTES.INQUIRY} element={<Inquiry />} />
                    <Route path={ROUTES.INQUIRY_DETAIL} element={<InquiryDetail />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.INQUIRY_SUCCESSFUL} element={<InquirySuccessful />} />
                    <Route path={ROUTES.ADMIN} element={<ProtectedRoute />}>
                        <Route path={ROUTES.ADMIN} element={<Admin />} />
                        <Route path={ROUTES.ADMIN_VIEW_TICKET} element={<TicketDetail />} />
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
