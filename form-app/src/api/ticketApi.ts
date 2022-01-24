import { Ticket } from './ticketApiModels';

const baseUrl = 'https://61c37a449cfb8f0017a3ebae.mockapi.io/todos';

const todoApi = {
    getTickets(): Promise<Ticket[]> {
        return fetch(baseUrl, { method: 'GET' })
            .then((response) => response.json())
            .catch((error) => console.log(error));
    },
    addTicket(payload: Ticket): Promise<Ticket> {
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
        });
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

export default todoApi;
