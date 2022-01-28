import { Form, Field, Formik } from 'formik';
import React, { useContext } from 'react';
import ticketApi from '../../../api/ticketApi';
import { Ticket } from '../../../api/ticketApiModels';
import Button from '../../../components/button/Button';
import Textarea from '../../../components/textarea/Textarea';
import AppContext from '../../../core/context/AppContext';
import useAsyncProcess from '../../../core/network/async-process/useAsyncProcess';
import './edit-ticket-detail-form.css';

interface EditTicketDetailProps {
    ticket: Ticket;
}

function EditTicketDetail({ ticket }: EditTicketDetailProps) {
    const { runAsyncProcess } = useAsyncProcess<Ticket>();
    const { dispatchAppStateAction } = useContext(AppContext);
    return (
        <div>
            <Formik
                onSubmit={async (data) => {
                    try {
                        const response = await runAsyncProcess(
                            ticketApi.updateTicket(
                                { ...ticket, response: data.response, status: data.status! },
                                ticket._id,
                            ),
                        );
                        dispatchAppStateAction({ type: 'UPDATE_TICKET', payload: response });
                        location.reload();
                    } catch (error) {}
                }}
                enableReinitialize
                initialValues={{ response: '', status: null }}
            >
                {({ values, errors }) => (
                    <Form>
                        <div className="radio-button-group">
                            <div role="group" aria-labelledby="radio-button-group">
                                <label>
                                    <Field type="radio" name="status" value="completed" />
                                    completed
                                </label>
                                <label>
                                    <Field type="radio" name="status" value="pending" />
                                    pending
                                </label>
                                <label>
                                    <Field type="radio" name="status" value="rejected" />
                                    rejected
                                </label>
                            </div>
                        </div>
                        <Field
                            name="response"
                            placeholder="Please enter your message"
                            value={values.response}
                            as={Textarea}
                        />
                        <Button type="submit">Update Ticket</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditTicketDetail;
