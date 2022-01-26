import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import NikeLogo from '../core/ui/assets/NikeLogo.png';
import './landing-page.css';

function Landing() {
    return (
        <div className="landing-page__container">
            <header>
                <div className="head__left">
                    <img src={NikeLogo} alt="Nike Logo" />
                </div>
                <div className="head__middle">
                    <Link to="/">Home</Link>
                    <Link to="/login">Admin Login</Link>
                    <Link to="/inquiry">Inquiry Ticket</Link>
                    <Link to="/send-ticket">Send Ticket</Link>
                </div>
                <div className="head__right">
                    <Link to="#">Profile</Link>
                </div>
            </header>
        </div>
    );
}

export default Landing;
