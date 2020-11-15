import React from "react";
import { GlobalProvider } from "./context/globalStore";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeAndExpense from "./components/incomeAndExpense";
import History from "./components/history";
import TransactionForm from "./components/transactionForm";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<GlobalProvider className="Expense-Tracker-App">
			<Header />
			<Balance />
			<IncomeAndExpense />
			<History />
			<TransactionForm />
			<Footer />
		</GlobalProvider>
	);
}

export default App;
