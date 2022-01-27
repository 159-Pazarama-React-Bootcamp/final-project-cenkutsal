import { AddTicketPayload, Ticket } from './ticketApiModels';

const baseUrl = 'http://localhost:4001/api/tickets';

const ticketApi = {
    getTickets(): Promise<Ticket[]> {
        return fetch(baseUrl, { method: 'GET' })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    addTicket(payload: AddTicketPayload): Promise<Ticket> {
        return fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    deleteTicket(id: string) {
        return fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    getTicketById(id: string) {
        return fetch(`${baseUrl}/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    updateTicket(payload: Ticket, id: string): Promise<Ticket> {
        return fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
};

export default ticketApi;
