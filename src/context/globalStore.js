import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState = [
	{ amount: 500, desc: "Cras justo odio" },
	{ amount: -250, desc: "Dapibus ac facilisis in" },
	{ amount: 300, desc: "Morbi leo risus" },
	{ amount: -100, desc: "Porta ac consectetur ac" },
	{ amount: 400, desc: "Vestibulum at eros" },
];

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children, className }) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

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
		<GlobalContext.Provider
			value={{ transactions: state, addTransaction }}
		>
			<div className={className}>
				{children}
			</div>
		</GlobalContext.Provider>
	);
};
