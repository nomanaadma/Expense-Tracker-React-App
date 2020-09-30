import React, { useContext } from "react";
import { GlobalContext } from "../context/globalStore";

function Balance() {
	let { transactions } = useContext(GlobalContext);

	const amounts = transactions.map(transaction => transaction.amount);
	const balance = amounts.reduce((total, item) => (total += item));

	return (
		<div className="balance">
			<h6 className="mb-0">Current Balance</h6>
			<h4>${balance}</h4>
		</div>
	);
}

export default Balance;
