import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, date, amount, id }) => {
  return (
    <div
      className="expense-item"
      id={id}
      onClick={(event) => console.log(event)}
    >
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className="expense-item__price">&#8377;{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
