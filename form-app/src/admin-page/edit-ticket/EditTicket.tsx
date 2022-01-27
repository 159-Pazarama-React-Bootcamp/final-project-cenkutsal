import React from 'react';
import { Ticket } from '../../api/ticketApiModels';
interface EditTicketProps {
    ticket: Ticket;
    onSubmit: VoidFunction;
}
function EditTicket({ ticket, onSubmit }: EditTicketProps) {
    return <div>Ticket is being edited.</div>;
}

export default EditTicket;
