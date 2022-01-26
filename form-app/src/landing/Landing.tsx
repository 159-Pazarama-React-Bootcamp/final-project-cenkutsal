import React from 'react';
import { Link } from 'react-router-dom';
import NikeLogo from '../core/ui/assets/NikeLogo.png';
import './landing-page.css';

function Landing() {
    return (
        <div className="landing-page__container">
            <header>
                <div className="header__left">
                    <img src={NikeLogo} alt="Nike Logo" />
                </div>
                <div className="header__middle">
                    <Link to="/">Home</Link>
                    <Link to="/login">Admin Login</Link>
                    <Link to="/inquiry">Inquiry Ticket</Link>
                    <Link to="/send-ticket">Send Ticket</Link>
                </div>
                <div className="header__right">
                    <a href="https://github.com/cenkutsal" target="_blank" rel="noreferrer">
                        My Github
                    </a>
                </div>
            </header>
            <section>
                <div className="section__left">
                    <h1>Nothing Can Stop The Run</h1>
                </div>
                <div className="section__right"></div>
            </section>
        </div>
    );
}

export default Landing;
