import React, { useEffect, useReducer } from 'react';
import ticketApi from '../../api/ticketApi';
import { Ticket } from '../../api/ticketApiModels';
import usersApi from '../../api/usersApi';
import { User } from '../../api/usersApiModels';
import useAsyncProcess from '../network/async-process/useAsyncProcess';
import AppContext, { appStateReducer, initialAppState as initialAppState } from './AppContext';

interface AppContextProviderProps {
    children: React.ReactNode;
}
function AppContextProvider({ children }: AppContextProviderProps) {
    const [appState, dispatchAppStateAction] = useReducer(appStateReducer, initialAppState);
    const { state: userState, runAsyncProcess } = useAsyncProcess<User>();
    const { state: ticketsState, runAsyncProcess: runGetTicketsAsyncProcess } = useAsyncProcess<Ticket[]>();

    useEffect(() => {
        (async () => {
            try {
                const response = await runAsyncProcess(usersApi.getLoggedInUser());
                if (response) {
                    const tickets = await runGetTicketsAsyncProcess(ticketApi.getTickets());
                    dispatchAppStateAction({ type: 'SET_USER', payload: response });
                    dispatchAppStateAction({ type: 'SET_IS_INITIAL_REQUEST_FETCHED', payload: true });
                    dispatchAppStateAction({ type: 'SET_TICKETS', payload: tickets });
                }
            } catch (error) {}
        })();
    }, []);

    return (
        <AppContext.Provider
            value={{
                appState: appState,
                dispatchAppStateAction: dispatchAppStateAction,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;
