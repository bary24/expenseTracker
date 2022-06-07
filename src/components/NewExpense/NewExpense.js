import "../../styles/NewExpense.css";
import React from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
