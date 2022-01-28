import React from 'react';
import Wrapper from '../../../components/wrapper/Wrapper';
import ROUTES from '../../../core/route/routes';
import './inquiry-successful.css';

function InquirySuccessful() {
    const ticketID = localStorage.getItem('ticketID');
    return (
        <Wrapper className="inquiry-successful__wrapper">
            <div className="inquiry-successful__container">
                <h2>We got your application!</h2>
                <h4>Your ID is: {ticketID}</h4>
                <div className="inquiry-successful__footer">
                    <span>
                        <a href={ROUTES.INQUIRY}>Inquiry</a>
                        <p>or</p>
                        <a href={ROUTES.HOME}>Return Home Page</a>
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

export default InquirySuccessful;
