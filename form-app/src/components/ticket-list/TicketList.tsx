import React, { useContext } from 'react';
import AppContext from '../../core/context/AppContext';
import TicketListItem from './item/TicketListItem';
import './ticket-list.css';

function TicketList() {
    const {
        appState: { tickets },
    } = useContext(AppContext);
    return (
        <ul className="ticket_list">
            {tickets.map((ticket) => (
                <TicketListItem key={ticket._id} ticket={ticket} />
            ))}
        </ul>
    );
}

export default TicketList;
