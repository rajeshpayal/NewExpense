import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const addExpenseToNewExpense = (expenseData) => {
    const expensesData = { ...expenseData, id: new Date().getTime() };

    onAddExpense(expenseData);

    console.log(expensesData);
  };
  return (
    <div className="new-expense">
      
      <ExpenseForm onAddExpenseToNewExpense={addExpenseToNewExpense} />
    </div>
  );
};

export default NewExpense;
