import React from 'react';
import Wrapper from '../../../../components/wrapper/Wrapper';
import ROUTES from '../../../../core/route/routes';
import './invalid-inquiry.css';

function ErrorPage() {
    return (
        <Wrapper className="invalid-inquiry__wrapper">
            <div className="invalid-inquiry__container">
                <h1>404</h1>
                <h2>Sorry this page does not exist.</h2>
                <div className="invalid-inquiry__footer">
                    <span>
                        <a href={ROUTES.HOME}>Return Home Page</a>
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

export default ErrorPage;
