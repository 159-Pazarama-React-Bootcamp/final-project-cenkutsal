import React from 'react';
import Button from '../../components/button/Button';
import { Form, Field, Formik } from 'formik';
import Input from '../../components/input/Input';
import NikeLogo from '../../core/ui/assets/Nike.svg';
import './report-form.css';
import NumberInput from '../../components/number-input/NumberInput';
import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .required('Please enter your first name')
        .max(40)
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),

    lastName: yup
        .string()
        .required('Please enter your last name')
        .max(40)
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
    ssn: yup.number().max(11).positive(),
    age: yup.number().max(3).positive(),
});

function ReportForm() {
    return (
        <div className="report-form">
            <header className="report-form__header">
                <img src={NikeLogo} alt="logo" />
                <h2 className="report-form--top--h2">BECOME A NIKE MEMBER</h2>
                <p>
                    Create your Nike Member profile and get first access to the very best of Nike products, inspiration
                    and community.
                </p>
            </header>

            <Formik
                initialValues={{ firstName: '', lastName: '', socialIDNumber: '', age: '' }}
                onSubmit={(data) => {
                    console.log(data);
                    console.log('test');
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors }) => (
                    <Form className="report-form__middle">
                        <Field placeholder="Name" name="firstName" as={Input} />
                        <Field placeholder="Last Name" name="lastName" as={Input} />
                        <Field placeholder="ID Number" name="socialIDNumber" as={Input} />
                        <Field placeholder="Age" name="age" as={NumberInput} />

                        <div className="report-form__footer">
                            <Button type="submit">send ticket</Button>
                            <span>
                                <p>Already sent a report?</p>
                                <a href="#">Inquiry Ticket</a>
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
