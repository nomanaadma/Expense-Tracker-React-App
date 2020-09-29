import React, { useContext } from "react";
import { TransactionProvider, TransactionContext } from "./transactionContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	let transactions = useContext(TransactionContext);

	return (
		<TransactionProvider>
			<div className="Expense-Tracker-App">
				<div className="text-center pb-4">
					<img src={require("./logo.png")} alt="Logo" />
				</div>

				<div className="balance">
					<h6 className="mb-0">Current Balance</h6>
					<h4>$100</h4>
				</div>

				<div className="expense-container text-center">
					<h6 className="mb-0">
						INCOME
						<br /> <span className="income_amount fz-40">$500</span>
					</h6>
					<span className="divider">&nbsp;</span>
					<h6 className="mb-0">
						EXPENSE
						<br />
						<span className="expense_amount fz-40">$240</span>
					</h6>
				</div>

				<div className="history mt-4">
					<h5>Add New Transaction</h5>
					<hr />
					<ul className="list-group clearfix">
						{transactions.map((transaction, index) => {
							return (
								<li
									key={index}
									className={
										transaction.amount > 0
											? "list-group-item income-list"
											: "list-group-item expense-list"
									}
								>
									<i className="delete">X</i>
									{transaction.desc}
									<span className="list-amount">
										{transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
									</span>
								</li>
							);
						})}
					</ul>
				</div>

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
							/>
						</div>
						<div className="form-group">
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								className="form-control"
								id="amount"
								placeholder="Amount"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary btn-block"
						>
							Add Transaction
						</button>
					</form>
				</div>
			</div>
		</TransactionProvider>
	);
}

export default App;
