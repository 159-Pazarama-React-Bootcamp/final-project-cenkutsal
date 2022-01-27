import React from 'react';
import Wrapper from '../../../../components/wrapper/Wrapper';
import './invalid-inquiry.css';

function InvalidInquiry() {
    console.log('geldi');

    return (
        <Wrapper className="invalid-inquiry__wrapper">
            <div className="invalid-inquiry__container">
                <h1>404</h1>
                <h2>Sorry this page does not exist.</h2>
            </div>
        </Wrapper>
    );
}

export default InvalidInquiry;
