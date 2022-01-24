import React, { useEffect, useReducer } from 'react';
import ticketApi from '../../api/ticketApi';
import { Ticket } from '../../api/ticketApiModels';
import useAsyncProcess from '../network/async-process/useAsyncProcess';
import AppContext, { appStateReducer, initialAppState as initialAppState } from './AppContext';

interface AppContextProviderProps {
    children: React.ReactNode;
}
function AppContextProvider({ children }: AppContextProviderProps) {
    const [appState, dispatchAppStateAction] = useReducer(appStateReducer, initialAppState);
    const { state, runAsyncProcess } = useAsyncProcess<Ticket[]>();

    useEffect(() => {
        (async () => {
            const response = await runAsyncProcess(ticketApi.getTickets());
            dispatchAppStateAction({ type: 'SET_TICKETS', payload: response });
            console.log(response);
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
