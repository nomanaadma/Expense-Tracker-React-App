import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalStore';

function History() {

	let { transactions, deleteTransaction } = useContext(GlobalContext);

	return (
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
							<i className="delete" onClick={ () => deleteTransaction(transaction)}>X</i>
							{transaction.desc}
							<span className="list-amount">
								{transaction.amount > 0 ? "+" : "-"}$
								{Math.abs(transaction.amount)}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default History;
