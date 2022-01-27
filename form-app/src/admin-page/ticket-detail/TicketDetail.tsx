import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ticketApi from '../../api/ticketApi';
import { Ticket } from '../../api/ticketApiModels';
import Wrapper from '../../components/wrapper/Wrapper';
import AppContext from '../../core/context/AppContext';
import useAsyncProcess from '../../core/network/async-process/useAsyncProcess';
import ROUTES from '../../core/route/routes';
import NikeLogo from '../../core/ui/assets/NikeLogo.png';

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
                <section className="ticket-detail__container">{currentTicketState.data?.firstName}</section>
            </Wrapper>
        </div>
    );
}

export default TicketDetail;
