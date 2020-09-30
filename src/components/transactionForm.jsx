import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalStore";

function TransactionForm() {
	let { addTransaction } = useContext(GlobalContext);

	let [desc, setDesc] = useState("");
	let [amount, setAmount] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();
		addTransaction({ amount: parseInt(amount), desc });
		setDesc("");
		setAmount(0);
	}

	return (
		<div className="transaction-form mt-4">
			<h5>Add New Transaction</h5>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						className="form-control"
						id="description"
						placeholder="Description"
						autoComplete="off"
						onChange={e => setDesc(e.target.value)}
						value={desc}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						className="form-control"
						id="amount"
						placeholder="Amount"
						autoComplete="off"
						onChange={e => setAmount(e.target.value)}
						value={amount}
					/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default TransactionForm;
