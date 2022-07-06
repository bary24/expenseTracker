import "../../styles/NewExpense.css";
import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  function addExpenseHandler() {
    setClicked(true);
  }
  function cancelHandler() {
    setClicked(false);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        addExpenseHandler={addExpenseHandler}
        cancelHandler={cancelHandler}
        clicked={clicked}
      />
    </div>
  );
};

export default NewExpense;
