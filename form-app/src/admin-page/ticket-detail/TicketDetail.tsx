import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ticketApi from '../../api/ticketApi';
import { Ticket } from '../../api/ticketApiModels';
import Wrapper from '../../components/wrapper/Wrapper';
import AppContext from '../../core/context/AppContext';
import useAsyncProcess from '../../core/network/async-process/useAsyncProcess';
import ROUTES from '../../core/route/routes';
import NikeLogo from '../../core/ui/assets/NikeLogo.png';
import EditTicketDetail from './edit/EditTicketDetail';
import './ticket-detail.css';

function TicketDetail() {
    const { appState } = useContext(AppContext);
    const { id } = useParams();
    const { state: currentTicketState, runAsyncProcess } = useAsyncProcess<Ticket>();
    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    await runAsyncProcess(ticketApi.getTicketById(id));
                }
            } catch (error) {}
        })();
    }, [id]);
    return (
        <div>
            <header>
                <div className="header__left">
                    <img src={NikeLogo} alt="Nike Logo" />
                </div>
                <div className="header__middle">
                    <Link to={ROUTES.ADMIN}>Admin Dashboard</Link>
                </div>
                <div className="header__right">
                    {appState.user?.username}
                    {/*<Logout /> */}
                </div>
            </header>
            <Wrapper className="ticket-detail__wrapper">
                <section className="ticket-detail">
                    <h2>Ticket Detail</h2>
                    <div className="ticket-detail__info">
                        <h4>Ticket ID: {currentTicketState.data?._id}</h4>
                        <h4>Status: {currentTicketState.data?.status}</h4>
                        <h4>First Name: {currentTicketState.data?.firstName}</h4>
                        <h4>Last Name: {currentTicketState.data?.lastName}</h4>
                        <h4>Social ID Number: {currentTicketState.data?.socialIDNumber}</h4>
                        <h4>Inquiry Reason: {currentTicketState.data?.reasonForInquiry}</h4>
                        <h4>Response: {currentTicketState.data?.response}</h4>
                    </div>
                    <div className="ticket-detail__footer">
                        {currentTicketState.data ? <EditTicketDetail ticket={currentTicketState.data} /> : null}
                        <span>
                            <p>Not the page you looking for?</p>
                            <a href={ROUTES.ADMIN}>View Tickets</a>
                        </span>
                    </div>
                </section>
            </Wrapper>
        </div>
    );
}

export default TicketDetail;
