import ExpensesList from "./ExpensesList";
import "../../styles/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
