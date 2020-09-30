import React, { useContext } from "react";
import { GlobalContext } from '../context/globalStore';

function IncomeAndExpense() {

	let { transactions } = useContext(GlobalContext);

	let amounts = transactions.map(transaction => transaction.amount);
		
	const incomeList = amounts.filter(item => item > 0);
	const income = incomeList.length ? incomeList.reduce((total, item) => total += item) : 0;
	
	const expenseList = amounts.filter(item => item < 0);
	const expense = expenseList.length ? expenseList.reduce((total, item) => total += item) * -1 : 0;

	return (
		<div className="expense-container text-center">
			<h6 className="mb-0">
				INCOME
				<br /> <span className="income_amount fz-40">${income}</span>
			</h6>
			<span className="divider">&nbsp;</span>
			<h6 className="mb-0">
				EXPENSE
				<br />
				<span className="expense_amount fz-40">${expense}</span>
			</h6>
		</div>
	);
}

export default IncomeAndExpense;
