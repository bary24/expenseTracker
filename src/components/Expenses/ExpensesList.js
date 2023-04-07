import "../../styles/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> No expenses found</h2>;
    } else {
        // eslint-disable-next-line no-unused-vars
        return props.items.map((expense) => {
            return (
                <ul className="expenses-list">
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                </ul>
            );
        });
    }
};

export default ExpensesList;
