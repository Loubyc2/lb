import React, { useContext, useReducer, createContext } from 'react';

const StateContext = createContext()

function StateProvider({ initialState, children, reducer }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
export default StateProvider;
