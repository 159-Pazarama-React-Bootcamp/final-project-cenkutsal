import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as yup from 'yup';
import { generatePath, useNavigate } from 'react-router';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Wrapper from '../../components/wrapper/Wrapper';
import ROUTES from '../../core/route/routes';
import './inquiry.css';

const validationSchema = yup.object({
    id: yup.string().required('Please enter your ticket ID.'),
});

function Inquiry() {
    const navigate = useNavigate();
    return (
        <Wrapper className="inquiry-form__wrapper">
            <div className="inquiry-form__container">
                <Formik
                    initialValues={{
                        id: '',
                    }}
                    onSubmit={(data) => {
                        navigate(generatePath(ROUTES.INQUIRY_DETAIL, { id: data.id }));
                    }}
                    validationSchema={validationSchema}
                >
                    {({ values, errors }) => (
                        <Form className="inquiry-form">
                            {errors.id ? (
                                <p style={{ color: 'red' }} className="inquiry-form__middle--error">
                                    {errors.id}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Ticket ID" name="id" as={Input} />
                            <div className="inquiry-form__footer">
                                <Button type="submit">inquiry</Button>
                                <span>
                                    <p>Not the page you looking for?</p>
                                    <a href={ROUTES.HOME}>Go Back</a>
                                </span>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default Inquiry;
