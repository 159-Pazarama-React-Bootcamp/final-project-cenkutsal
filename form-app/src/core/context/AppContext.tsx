import { createContext, Dispatch } from 'react';
import { Ticket } from '../../api/ticketApiModels';
import { User } from '../../api/usersApiModels';

interface AppState {
    user: User | null;
    tickets: Ticket[];
    isInitialRequestFetched: boolean;
}
const initialAppState: AppState = {
    user: null,
    tickets: [] as Ticket[],
    isInitialRequestFetched: false,
} as const;

type AppStateAction =
    | { type: 'SET_TICKETS'; payload: Ticket[] }
    | { type: 'ADD_TICKET'; payload: Ticket }
    | { type: 'SET_TICKET_STATUS'; payload: { ticketID: string } }
    | { type: 'REMOVE_TICKET'; payload: { ticketID: string } }
    | { type: 'UPDATE_TICKET'; payload: Ticket }
    | { type: 'SET_USER'; payload: User }
    | {
          type: 'SET_IS_INITIAL_REQUEST_FETCHED';
          payload: boolean;
      };

//App state Reducer
function appStateReducer(state = initialAppState, action: AppStateAction) {
    let newState = state;
    switch (action.type) {
        case 'SET_TICKETS':
            newState = { ...state, tickets: action.payload };
            break;
        case 'ADD_TICKET':
            newState = { ...state, tickets: [...state.tickets, action.payload] };
            break;
        case 'SET_TICKET_STATUS': {
            const newTickets = [...state.tickets];
            const ticketIndex = state.tickets.findIndex((t) => t._id === action.payload.ticketID);
            const relatedTicket = state.tickets[ticketIndex];
            newTickets.splice(ticketIndex, 1, {
                ...relatedTicket,
                status: relatedTicket.status,
            });
            newState = { ...state, tickets: newTickets };
            break;
        }

        case 'REMOVE_TICKET': {
            const newTickets = state.tickets.filter((ticket) => ticket._id !== action.payload.ticketID);
            newState = { ...state, tickets: newTickets };
            break;
        }
        case 'UPDATE_TICKET': {
            const newTickets = [...state.tickets];
            const ticketIndex = state.tickets.findIndex((t) => t === action.payload);
            newTickets.splice(ticketIndex, 1, action.payload);
            newState = { ...state, tickets: newTickets };
            break;
        }
        case 'SET_USER':
            newState = { ...state, user: action.payload };
            break;

        case 'SET_IS_INITIAL_REQUEST_FETCHED':
            newState = { ...state, isInitialRequestFetched: action.payload };
            break;
        default:
            break;
    }
    return newState;
}
const AppContext = createContext({
    appState: initialAppState,
    dispatchAppStateAction: (() => undefined) as Dispatch<AppStateAction>,
});
export default AppContext;
export { appStateReducer as appStateReducer, initialAppState as initialAppState };
