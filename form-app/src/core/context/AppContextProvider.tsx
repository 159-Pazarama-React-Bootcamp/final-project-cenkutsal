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
    const { state, runAsyncProcess } = useAsyncProcess<User>();

    useEffect(() => {
        (async () => {
            try {
                const response = await runAsyncProcess(usersApi.getLoggedInUser());
                dispatchAppStateAction({ type: 'SET_USER', payload: response });
                console.log(response);
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
