import { Form, Field, Formik } from 'formik';
import React, { FormEvent, useContext } from 'react';
import ticketApi from '../../../api/ticketApi';
import { Ticket } from '../../../api/ticketApiModels';
import Button from '../../../components/button/Button';
import Textarea from '../../../components/textarea/Textarea';
import AppContext from '../../../core/context/AppContext';
import useAsyncProcess from '../../../core/network/async-process/useAsyncProcess';

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
                            ticketApi.updateTicket({ ...ticket, response: data.response }, ticket._id),
                        );
                        dispatchAppStateAction({ type: 'UPDATE_TICKET', payload: response });
                        location.reload();
                    } catch (error) {}
                }}
                enableReinitialize
                initialValues={{ response: '' }}
            >
                {({ values, errors }) => (
                    <Form>
                        <Field name="response" placeholder="Please enter your message" as={Textarea} />
                        <Button type="submit">Update Ticket</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditTicketDetail;
