interface Ticket {
    firstName: string;
    lastName: string;
    _id: string;
    socialIDNumber: string;
    status: 'rejected' | 'pending' | 'completed';
    reasonForInquiry: string;
    address: string;
    response?: string;
}
interface AddTicketPayload {
    firstName: string;
    lastName: string;
    socialIDNumber: string;
    reasonForInquiry: string;
    address: string;
    response?: string;
}

export type { Ticket, AddTicketPayload };
