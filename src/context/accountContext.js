import { createContext, useReducer } from "react";

const initialState = {
    balance: 5000
};

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'DECREASE_ACCOUNT_BALANCE':
            return {
                ...state,
                balance: state.balance - parseInt(payload)
            };
        default:
            return state;
    }
};

const AccountContext = createContext(initialState);

function AccountProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AccountContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export { AccountContext, AccountProvider };