import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./EnxpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    
    const [enteredYear, setEnteredYear] = useState('2020');

    const changedYearHandler = (filteredYear) => {
        setEnteredYear(filteredYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredYear;
    })

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={enteredYear} onChangeYear={changedYearHandler}/>

            {filteredExpenses.map((expense) => (<ExpenseItem 
            key = {expense.id}
            title={expense.title} amount={expense.amount} date={expense.date}/>))}
            </Card>
        </div>
    )
}

export default Expenses;