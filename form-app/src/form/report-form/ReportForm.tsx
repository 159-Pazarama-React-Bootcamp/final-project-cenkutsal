import React from 'react';
import Button from '../../components/button/Button';
import { Form, Field, Formik } from 'formik';
import Input from '../../components/input/Input';
import NikeLogo from '../../core/ui/assets/Nike.svg';
import './report-form.css';
import NumberInput from '../../components/number-input/NumberInput';
import * as yup from 'yup';
import Textarea from '../../components/textarea/Textarea';

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
    socialIDNumber: yup.string().max(11).required('Please enter your social ID number*'),
    age: yup.number().positive('Your age must be a positive number*'),
    reasonForInquiry: yup.string().required('Please enter the reason for inquiry'),
    address: yup.string().required('Please enter your address'),
});

function ReportForm() {
    return (
        <div className="report-form">
            <header className="report-form__header">
                <img src={NikeLogo} alt="logo" />
                <br />
                <br />
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
                onSubmit={(data, { resetForm }) => {
                    //api stuff will happen here

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
                {({ values, errors }) => (
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
                        {errors.reasonForInquiry ? (
                            <p style={{ color: 'red' }} className="report-form__middle--error">
                                {errors.reasonForInquiry}
                            </p>
                        ) : (
                            ''
                        )}
                        <Field placeholder="Reason For Inquiry" name="reasonForInquiry" as={Textarea} />
                        {errors.address ? (
                            <p style={{ color: 'red' }} className="report-form__middle--error">
                                {errors.address}
                            </p>
                        ) : (
                            ''
                        )}
                        <Field placeholder="Your Address" name="address" as={Textarea} />

                        <div className="report-form__footer">
                            <Button type="submit">send ticket</Button>
                            <span>
                                <p>Already sent a ticket?</p>
                                <a href="#">Inquiry </a>
                            </span>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
    function handleInputChange() {
        console.log('input changed');
    }
}

export default ReportForm;
