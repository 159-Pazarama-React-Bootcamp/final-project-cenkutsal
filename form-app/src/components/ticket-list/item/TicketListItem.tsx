import React from 'react';
import { generatePath, useNavigate } from 'react-router';
import { Ticket } from '../../../api/ticketApiModels';
import ROUTES from '../../../core/route/routes';
import AdminPageButton from '../../admin-page-button/AdminPageButton';
import './ticket-list-item.css';

interface TodoListItemProps {
    ticket: Ticket;
}

function TicketListItem({ ticket }: TodoListItemProps) {
    const navigate = useNavigate();
    return (
        <li>
            <div className="list-item__left-child">
                <h2>
                    {ticket.firstName} {ticket.lastName}
                </h2>
            </div>
            <div className="list-item__right-child">
                <h2>Status: {ticket.status}</h2>
                <div className="edit-button">
                    <AdminPageButton onClick={handleViewClick}>view</AdminPageButton>
                </div>
            </div>
        </li>
    );
    function handleViewClick() {
        navigate(generatePath(ROUTES.ADMIN_VIEW_TICKET, { id: ticket._id }));
    }
}

export default TicketListItem;
