import React, { useContext, useState } from 'react';
import Button from '../../components/button/Button';
import { Form, Field, Formik } from 'formik';
import Input from '../../components/input/Input';
import './report-form.css';
import NumberInput from '../../components/number-input/NumberInput';
import * as yup from 'yup';
import Textarea from '../../components/textarea/Textarea';
import { Ticket } from '../../api/ticketApiModels';
import ticketApi from '../../api/ticketApi';
import useAsyncProcess from '../../core/network/async-process/useAsyncProcess';
import AppContext from '../../core/context/AppContext';
import Wrapper from '../../components/wrapper/Wrapper';
import ROUTES from '../../core/route/routes';
import { generatePath, useNavigate } from 'react-router';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('Please enter your first name*')
        .max(40)
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),

    lastName: yup
        .string()
        .required('Please enter your last name*')
        .max(40)
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
    socialIDNumber: yup
        .string()
        .max(11)
        .required('Please enter your social ID number*')
        .matches(/^[1-9]{1}[0-9]{9}[02468]{1}$/, 'Invalid Social ID Number'),
    age: yup.number().positive('Your age must be a positive number'),
    reasonForInquiry: yup.string().required('Please enter the reason for your inquiry*'),
    address: yup.string().required('Please enter your address*'),
});

function ReportForm() {
    const { runAsyncProcess: runAddTicketAsyncProcess } = useAsyncProcess<Ticket>();
    const { appState: currentTicketState, dispatchAppStateAction: dispatchAppStateAction } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <Wrapper className="report-form__wrapper">
            <div className="report-form">
                <header className="report-form__header">
                    <h2 className="report-form--top--h2">SEND US A TICKET</h2>
                    <p>Let us hear your problem. Our team will be in touch with you in a very short period of time.</p>
                </header>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        socialIDNumber: '',
                        age: '',
                        reasonForInquiry: '',
                        address: '',
                    }}
                    onSubmit={async (data, { resetForm }) => {
                        try {
                            const response = await runAddTicketAsyncProcess(
                                ticketApi.addTicket({
                                    firstName: data.firstName,
                                    lastName: data.firstName,
                                    address: data.address,
                                    reasonForInquiry: data.reasonForInquiry,
                                    socialIDNumber: data.socialIDNumber,
                                }),
                            );
                            dispatchAppStateAction({ type: 'ADD_TICKET', payload: response });
                            navigate(generatePath(ROUTES.INQUIRY_SUCCESSFUL));
                            localStorage.setItem('ticketID', response._id);
                            location.reload();
                        } catch (error) {}
                        resetForm({
                            values: {
                                age: '',
                                firstName: '',
                                lastName: '',
                                socialIDNumber: '',
                                reasonForInquiry: '',
                                address: '',
                            },
                        });
                    }}
                    validationSchema={validationSchema}
                >
                    {({ errors }) => (
                        <Form className="report-form__middle">
                            {errors.firstName ? (
                                <p style={{ color: 'red' }} className="report-form__middle--error">
                                    {errors.firstName}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Name" name="firstName" as={Input} />
                            {errors.lastName ? (
                                <p style={{ color: 'red' }} className="report-form__middle--error">
                                    {errors.lastName}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Last Name" name="lastName" as={Input} />
                            {errors.socialIDNumber ? (
                                <p style={{ color: 'red' }} className="report-form__middle--error">
                                    {errors.socialIDNumber}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Social ID Number" name="socialIDNumber" as={NumberInput} />
                            {errors.age ? (
                                <p style={{ color: 'red' }} className="report-form__middle--error">
                                    {errors.age}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Age" name="age" as={NumberInput} />
                            {errors.address ? (
                                <p style={{ color: 'red' }} className="report-form__middle--error">
                                    {errors.address}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Your Address" name="address" as={Textarea} />
                            {errors.reasonForInquiry ? (
                                <p style={{ color: 'red' }} className="report-form__middle--error">
                                    {errors.reasonForInquiry}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Reason For Inquiry" name="reasonForInquiry" as={Textarea} />
                            <div className="report-form__footer">
                                <Button type="submit">send ticket</Button>
                                <span>
                                    <p>Already sent a ticket?</p>
                                    <a href={ROUTES.INQUIRY}>Inquiry</a>
                                    <p>or</p>
                                    <a href={ROUTES.HOME}>Return Home Page</a>
                                </span>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default ReportForm;
