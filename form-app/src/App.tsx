import React from 'react';
import ReportForm from './form/report-form/ReportForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './landing/Landing';
import './app.css';
import Login from './form/login-form/Login';

function App() {
    return (
        <div className="app__container">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/send-ticket" element={<ReportForm />} />
                    <Route path="/login" element={<Login />} />
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
