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
  console.log(receivedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultYear={receivedYear}
      />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}
export default Expenses;
