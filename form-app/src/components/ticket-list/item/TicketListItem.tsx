import React, { useState } from 'react';
import EditTicket from '../../../admin-page/edit-ticket/EditTicket';
import { Ticket } from '../../../api/ticketApiModels';
import useAsyncProcess from '../../../core/network/async-process/useAsyncProcess';
import Modal from '../../modal/Modal';

interface TodoListItemProps {
    ticket: Ticket;
}

function TicketListItem({ ticket }: TodoListItemProps) {
    const { runAsyncProcess } = useAsyncProcess();
    const [shouldDisplayEditModal, setEditModalVisibility] = useState(false);
    return (
        <li>
            <h2>Ticket ID: {ticket._id}</h2>
            <h2>Status: {ticket.status}</h2>
            <h2>Reason for Inquiry: {ticket.reasonForInquiry}</h2>
            {shouldDisplayEditModal && (
                <Modal isOpen={shouldDisplayEditModal} modalContentLabel="Edit Todo" onClose={handleEditModalClose}>
                    <EditTicket ticket={ticket} onSubmit={handleEditModalClose} />
                </Modal>
            )}
        </li>
    );
    function handleEditClick() {
        setEditModalVisibility(true);
    }
    function handleEditModalClose() {
        setEditModalVisibility(false);
    }
}

export default TicketListItem;
