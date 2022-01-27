import React, { useEffect } from 'react';
import ticketApi from '../../../../api/ticketApi';
import { Ticket } from '../../../../api/ticketApiModels';

interface ValidInquiryProps {
    data: Ticket;
}

function ValidInquiry(props: ValidInquiryProps) {
    return <div>{props.data.firstName}</div>;
}

export default ValidInquiry;
