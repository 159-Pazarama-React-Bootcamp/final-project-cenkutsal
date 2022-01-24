interface Ticket {
    firstName: string;
    lastName: string;
    _id: string;
    socialIDNumber: string;
    status: 'rejected' | 'pending' | 'completed';
    reasonForInquiry: string;
    address: string;
    attachment?: string;
}

interface User {
    username: string;
    password: string;
}

export type { Ticket, User };
