import React, { useState } from "react";
import { toast } from "react-toastify";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpenseToNewExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);

  const submitHanlder = (event) => {
    event.preventDefault();
    if (title.length === 0 || title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (amount === "") {
      toast.error("Please enter a amount");
      return;
    }
    if (date === "") {
      toast.error("Please enter a date");
      return;
    }

    onAddExpenseToNewExpense({ title, amount: +amount, date: new Date(date) });
    setShow(false);

    setAmount("");
    setDate("");
    setTitle("");
  };

  const showHandler = () => {
    setShow(true);
  };
  const cancelHandler = () => {
    setShow(false);
  };
  return (
    <>
      {!show && <button onClick={showHandler}>Add New Expense</button>}
      {show && (
        <form onSubmit={submitHanlder}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type={"text"}
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                name="amount"
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                min="2019-01-01"
                max="2024-01-01"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button>Add Expense</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
