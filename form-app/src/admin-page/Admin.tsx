import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TicketList from '../components/ticket-list/TicketList';
import Wrapper from '../components/wrapper/Wrapper';
import AppContext from '../core/context/AppContext';
import ROUTES from '../core/route/routes';
import NikeLogo from '../core/ui/assets/NikeLogo.png';
import './admin.css';

function Admin() {
    const { appState } = useContext(AppContext);
    return (
        <div>
            <header className="header">
                <div className="header__left">
                    <img src={NikeLogo} alt="Nike Logo" />
                </div>
                <div className="header__middle">
                    <Link to={ROUTES.ADMIN}>Admin Dashboard</Link>
                </div>
                <div className="header__right">
                    @{appState.user?.username}
                    {/*<Logout /> */}
                </div>
            </header>
            <Wrapper className="ticket-list__wrapper">
                <section className="ticket-list__container">
                    <TicketList />
                </section>
            </Wrapper>
        </div>
    );
}

export default Admin;
