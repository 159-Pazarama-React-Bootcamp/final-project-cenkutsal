import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ticketApi from '../../../api/ticketApi';
import { Ticket } from '../../../api/ticketApiModels';
import Spinner from '../../../components/spinner/Spinner';
import useAsyncProcess from '../../../core/network/async-process/useAsyncProcess';
import ErrorPage from './inquiry-detail-invalid/InvalidInquiry';
import ValidInquiry from './inquiry-detail-valid/ValidInquiry';

function InquiryDetail() {
    const { id } = useParams();
    const { state, runAsyncProcess } = useAsyncProcess<Ticket>();
    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    await runAsyncProcess(ticketApi.getTicketById(id));
                }
            } catch (error) {}
        })();
    }, [id]);
    return <div>{renderContent()}</div>;

    function renderContent() {
        let content: React.ReactNode = <Spinner />;

        if (state.isRequestFetched) {
            content = state.isRequestFetched && state.data ? <ValidInquiry data={state.data} /> : <ErrorPage />;
        }

        return content;
    }
}

export default InquiryDetail;
