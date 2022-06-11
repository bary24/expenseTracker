import ExpenseItem from "./ExpenseItem";
import "../../styles/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [receivedYear, setReceivedYear] = useState("2019");
  const filterChangeHandler = (chosenYear) => {
    setReceivedYear(chosenYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return receivedYear === expense.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultYear={receivedYear}
      />
      {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}
export default Expenses;
