import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React , { useReducer, createContext } from 'react';
import ReducerContext from './ReducerContext';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":16,"category":"Travel","type":"Expense","date":"2022-07-05","id":"e27110df-b325-4973-986b-3e41c0353b4a"},{"amount":200,"category":"Lottery","type":"Income","date":"2022-07-05","id":"b72ce0dd-0dac-4d6f-a5be-5a4fb3ddfe0f"},{"amount":100,"category":"Shopping","type":"Expense","date":"2022-07-05","id":"0480ad28-6482-415a-8d30-3a20224986d1"},{"amount":100,"category":"Gifts","type":"Income","date":"2022-07-05","id":"62edf5e2-263e-46ba-a14f-ffb12819acc2"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ( {children} ) => {
    const [transactions, dispatch] = useReducer(ReducerContext, initialState);

    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});

    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION', payload: transaction});

    const balance = transactions.reduce((acc, curVal) => {return curVal.type === 'Expense' ? acc - curVal.amount : acc+curVal.amount;}, 0);

    return (
    <ExpenseTrackerContext.Provider value={{ 
        deleteTransaction,
        addTransaction,
        transactions,
        balance
     }}>
        {children}
    </ExpenseTrackerContext.Provider>
    )
}