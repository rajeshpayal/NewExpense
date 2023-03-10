import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  const options = { month: "long" };
  const month = new Intl.DateTimeFormat("en-US", options).format(date);
  const year = date.getFullYear();
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
