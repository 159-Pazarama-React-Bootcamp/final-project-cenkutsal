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

export type { Ticket };
