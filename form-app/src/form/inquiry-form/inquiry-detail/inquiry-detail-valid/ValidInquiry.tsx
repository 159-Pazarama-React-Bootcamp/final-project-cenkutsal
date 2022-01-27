import React, { useEffect } from 'react';
import ticketApi from '../../../../api/ticketApi';
import { Ticket } from '../../../../api/ticketApiModels';
import Wrapper from '../../../../components/wrapper/Wrapper';
import ROUTES from '../../../../core/route/routes';
import './valid-inquiry.css';

interface ValidInquiryProps {
    data: Ticket;
}

function ValidInquiry(props: ValidInquiryProps) {
    return (
        <Wrapper className="valid-inquiry__wrapper">
            <div className="valid-inquiry__container">
                <h3>Ticket ID:{props.data._id}</h3>
                <h3>First Name:{props.data.firstName}</h3>
                <h3>Last Name:{props.data.lastName}</h3>
                <h3>Status:{props.data.status}</h3>
                <h3>Reason for Inquiry:{props.data.reasonForInquiry}</h3>
                <h3>Response:{props.data.response}</h3>
                <div className="valid-inquiry__footer">
                    <span>
                        <a href={ROUTES.HOME}>Return Home Page</a>
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

export default ValidInquiry;
