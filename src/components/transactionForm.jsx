import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalStore";
import Joi from "joi-browser";

function TransactionForm() {
	let { addTransaction } = useContext(GlobalContext);

	let [desc, setDesc] = useState("");
	let [amount, setAmount] = useState(0);
	let [errors, setErrors] = useState({});

	let stateFunctions = {
		desc: setDesc,
		amount: setAmount
	}

	let schema = {
        desc: Joi.string().required().label("description"),
        amount: Joi.number().disallow(0).required().label("Amount"),
	};

	const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schemaTemp = { [name]: schema[name] };
        const { error } = Joi.validate(obj, schemaTemp);
        return error ? error.details[0].message : null;
    };
	
	const validate = () => {
        const option = { abortEarly: false };
        const { error } = Joi.validate({ amount, desc }, schema, option);

        if (!error) return {};

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
	};
	
	const handleChange = ({ currentTarget: input }) => {

		const validationErrors = { ...errors };
        const errorMessage = validateProperty(input);
        if (errorMessage) validationErrors[input.name] = errorMessage;
		else delete validationErrors[input.name];
		setErrors(validationErrors);

		stateFunctions[input.name](input.value);
		
    };

	function handleSubmit(e) {
		
		e.preventDefault();

		let validationErrors = validate();
		setErrors(validationErrors);

		if ( Object.keys(validationErrors).length) return;
		
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
						name="desc"
						placeholder="Description"
						autoComplete="off"
						onChange={handleChange}
						value={desc}
					/>
					{errors.desc && <div className="alert alert-danger mt-2">{errors.desc}</div>}
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						className="form-control"
						id="amount"
						name="amount"
						placeholder="Amount"
						autoComplete="off"
						onChange={handleChange}
						value={amount}
					/>
					{errors.amount && <div className="alert alert-danger mt-2">{errors.amount}</div>}
				</div>
				<button type="submit" className="btn btn-primary btn-block">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default TransactionForm;
