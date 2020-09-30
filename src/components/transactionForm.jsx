import React, { useState } from "react";

function TransactionForm() {
	
	let [desc, setDesc] = useState("");
	let [amount, setAmount] = useState("");

	return (
		<div className="transaction-form mt-4">
			<h5>Add New Transaction</h5>
			<hr />
			<form>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						className="form-control"
						id="description"
						placeholder="Description"
						onChange={e => setDesc(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						type="text"
						className="form-control"
						id="amount"
						placeholder="Amount"
						onChange={e => setAmount(e.target.value)}
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
