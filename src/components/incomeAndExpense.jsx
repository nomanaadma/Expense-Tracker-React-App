import React from "react";

function IncomeAndExpense() {
	return (
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
	);
}

export default IncomeAndExpense;
