import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import NewExpense from "./NewExpense";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExoensesChart";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
const Expenses = () => {
  const [year, setYear] = useState("2023");
  const [expense, setExpenses] = useState(expenses);

  const addExpenses = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
    console.log(expense);
    toast.success("Added expense successfully!");
  };
  const filterHandler = (selectedYear) => {
    setYear(selectedYear);

    toast.success(`${selectedYear} expenses successfully displayed`);
  };
  const filterExpenses = expense.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <NewExpense onAddExpense={addExpenses} />
      <ExpensesFilter onExpenseFilter={filterHandler} filteredYear={year} />
      <Card>
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList filterExpenses={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
