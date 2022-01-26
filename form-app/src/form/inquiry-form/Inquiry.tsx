import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import ticketApi from '../../api/ticketApi';
import { Ticket } from '../../api/ticketApiModels';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Wrapper from '../../components/wrapper/Wrapper';
import AppContext from '../../core/context/AppContext';
import useAsyncProcess from '../../core/network/async-process/useAsyncProcess';
import './inquiry.css';

function Inquiry() {
    const { runAsyncProcess: runGetTicketByIdAsyncProcess } = useAsyncProcess<Ticket>();
    const { dispatchAppStateAction: dispatchAppStateAction } = useContext(AppContext);
    return (
        <Wrapper className="inquiry-form__wrapper">
            <div className="inquiry-form__container">
                <Formik
                    initialValues={{
                        _id: '',
                    }}
                    onSubmit={async (data) => {
                        try {
                            // const response = await runGetTicketByIdAsyncProcess(ticketApi.getTicketById());
                            //TO-DO -> route to ticket sent successfully page.
                        } catch (error) {}
                    }}
                >
                    {({ values, errors }) => (
                        <Form className="inquiry-form">
                            {errors._id ? (
                                <p style={{ color: 'red' }} className="inquiry-form__middle--error">
                                    {errors._id}
                                </p>
                            ) : (
                                ''
                            )}
                            <Field placeholder="Ticket ID" name="_id" as={Input} />
                            <div className="inquiry-form__footer">
                                <Button type="submit">login</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default Inquiry;
