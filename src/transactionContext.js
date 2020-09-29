import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transactionReducer";

const initialTransaction = [
	{ amount: 500, desc: "Cras justo odio" },
	{ amount: -250, desc: "Dapibus ac facilisis in" },
	{ amount: 300, desc: "Morbi leo risus" },
	{ amount: -100, desc: "Porta ac consectetur ac" },
	{ amount: 400, desc: "Vestibulum at eros" },
];

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({ children }) => {

	let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

	function addTransaction(transactionObj) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: {
				amount: transactionObj.amount,
				desc: transactionObj.desc
			}
		});
	}

	return (
		<TransactionContext.Provider
			value={{ transactions: state, addTransaction }}
		>
			{children}
		</TransactionContext.Provider>
	);
};
